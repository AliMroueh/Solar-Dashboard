import express from 'express';
import path from "path";
import multer from 'multer';
import { fileURLToPath } from 'url';
import fs from 'fs';
import shortid from'shortid';
import Battery from '../models/batteryModel.js';
import { body, validationResult} from 'express-validator';
const batteryRouter = express.Router();

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
  





  batteryRouter.post("/create", upload.single("batteryImage"),
   
  [
    // Validate the fields
    body('type', 'Please Enter A Type').trim().notEmpty(),
    body('capacity', 'Please Enter The Capacity').trim().notEmpty(),
    body('description', 'Please Enter The Description').trim().notEmpty(),


  ],
  (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Create the battery object
    const batteryObj = {
      type: req.body.type,
      capacity:req.body.capacity,
      description:req.body.description
    };

    // Add the batteryImage field if a file was uploaded
    if (req.file) {
        batteryObj.batteryImage = 'http://localhost:5000/public/' + req.file.filename;
    }

    // Save the battery to the database
    const batt = new Battery(batteryObj);
    batt.save((error, battery) => {
      if (error) return res.status(400).json({ error });
      if (battery) {
        return res.status(201).json({ battery });
      }
    });
  }
);



batteryRouter.put('/battery/update/:id', upload.single("batteryImage"),
 async (req, res) => {
    const battery = await Battery.findById(req.params.id);

    if (battery) {
        battery.type = req.body.type || battery.type;
        battery.capacity = req.body.capacity || battery.capacity;
        battery.description = req.body.description || battery.description;



        if (req.file) {
            // Extract the filename from the batteryImage URL
            const oldImagePath = path.join(path.dirname(__dirname), "uploads/") + battery.batteryImage.split('/').pop();
            fs.unlinkSync(oldImagePath); // Delete the old image
            battery.batteryImage = 'http://localhost:5000/public/' + req.file.filename;
        }

        const updatedBattery = await battery.save();

        res.send({
            _id: updatedBattery._id,
            type: updatedBattery.type,
            capacity: updatedBattery.capacity,
            batteryImage: updatedBattery.batteryImage,
            description: updatedBattery.description
        });
    } else {
        res.status(401).send({ message: "Unknown id" });
    }
});


batteryRouter.get('/get', (req, res) => {
    Battery.find().exec((err, batteries) => {
        if (err) {
            res.json({ message: err.message });
        } else {
  
            res.send(batteries)
            
        }
    })
  });


  

batteryRouter.delete('/battery/delete/:id', async (req, res) => {
  try {
    const battery = await Battery.findById(req.params.id);
    if (!battery) {
      return res.status(404).json({ message: 'Battery not found' });
    }

    // Remove the battery image from the server file system
    const imagePath = path.join(path.dirname(__dirname), "uploads/")+battery.batteryImage.split('/').pop();
    fs.unlinkSync(imagePath, (err) => {
      if (err) {
        console.error(err);
      }
    });

    await Battery.findByIdAndRemove(req.params.id);
    res.status(201).json({ message: 'Battery removed' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});



export default batteryRouter;
