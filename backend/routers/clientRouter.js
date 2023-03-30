import express from 'express';
import path from "path";
import multer from 'multer';
import { fileURLToPath } from 'url';
import fs from 'fs';
import shortid from'shortid';
import Client from '../models/clientModel.js';
import { body, validationResult} from 'express-validator';
import expressAsyncHandler from 'express-async-handler';
import passport from 'passport';
import System from '../models/systemModel.js';
const clientRouter = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), "uploads"));
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + "-" + file.originalname);
    },
  });
  const upload = multer({ storage });
  

  clientRouter.post("/create",
  passport.authenticate('jwt', { session: false }),
   upload.single("clientImage"),
  [
    // Validate the fields

    body('name', 'Please enter a name').trim().notEmpty().isString().isLength({ max: 255 })
      .withMessage('Name must be no more than 255 characters'),
    body('email', 'Please enter an email').trim().notEmpty().isEmail(),
    body('address', 'Please enter an address').trim().notEmpty().isString().isLength({ max: 255 })
      .withMessage('Address must be no more than 500 characters'),
    body('phone', 'Please enter a phone number').trim().notEmpty().isNumeric().isLength({ max: 20 })
      .withMessage('Phone number must be no more than 20 digits'),

  ],
  expressAsyncHandler(async (req, res, next) => {

    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      if (req.file) {
        await fs.promises.unlink(req.file.path);
      }
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if any required field is empty
    if (!req.body.name || !req.body.email || !req.body.address || !req.body.phone) {
      if (req.file) {
        await fs.promises.unlink(req.file.path);
      }
      return res.status(400).json({ message: "Please enter all the required fields" });
    }

    const isExist = await Client.findOne({email: req.body.email});

    if(isExist){
     res.status(400).json({message: "Email already exists"})
     return;
    }

    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!req.body.email.match(emailValidation)) {
      if (req.file) {
        await fs.promises.unlink(req.file.path);
      }
      return res.status(401).send({ message: "Email should be like example@gmail.com" });
    } else {
      // Create the client object
      const clientObj = {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone
      };

      // Add the clientImage field if a file was uploaded and all the required fields are not empty
      if (req.file && req.body.name && req.body.email && req.body.address && req.body.phone) {
        clientObj.clientImage = 'http://localhost:5000/public/' + req.file.filename;
      }

      // Save the client to the database
      const ct = new Client(clientObj);
      ct.save((error, client) => {
        if (error) return res.status(400).json({ error });
        if (client) {
          return res.status(201).json({ client });
        }
      });
    }
  }
  ));


clientRouter.put('/client/update/:id',
passport.authenticate('jwt', { session: false }),
 upload.single("clientImage"),
expressAsyncHandler(async (req, res) => {
    const client = await Client.findById(req.params.id);

    if (client) {
        client.name = req.body.name || client.name;
        client.email = req.body.email || client.email;
        client.address = req.body.address || client.address;
        client.phone = req.body.phone || client.phone;



        if (req.file) {
            // Extract the filename from the clientImage URL
            const oldImagePath = path.join(path.dirname(__dirname), "uploads/") + client.clientImage.split('/').pop();
            fs.unlinkSync(oldImagePath); // Delete the old image
            client.clientImage = 'http://localhost:5000/public/' + req.file.filename;
        }

        const updatedClient = await client.save();

        res.send({
            _id: updatedClient._id,
            name: updatedClient.name,
            clientImage: updatedClient.clientImage,
            email: updatedClient.email,
            address: updatedClient.address,
            phone: updatedClient.phone
        });
    } else {
        res.status(401).send({ message: "Unknown id" });
    }
}));


clientRouter.get('/get',
passport.authenticate('jwt', { session: false }),
 (req, res) => {
    Client.find().exec((err, clients) => {
        if (err) {
            res.json({ message: err.message });
        } else {
  
            res.send(clients)
            
        }
    })
  });


  

clientRouter.delete('/client/delete/:id',
passport.authenticate('jwt', { session: false }),
 expressAsyncHandler(async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);

    const isSystemExists = await System.findOne({clientId: client._id})

    if(isSystemExists){
      await System.deleteOne({clientId: client._id})
    }
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    // Remove the client image from the server file system
    if (client.clientImage) {
    const imagePath = path.join(path.dirname(__dirname), "uploads/") + client.clientImage.split('/').pop();
    fs.unlinkSync(imagePath);
    }
    await Client.findByIdAndRemove(req.params.id);
    res.status(201).json({ message: 'Client removed' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}));



export default clientRouter;
