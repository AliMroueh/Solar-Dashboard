import Inverter from "../models/inverterModel.js";
import shortid from 'shortid';
import { body, validationResult } from 'express-validator';
import express from 'express';
const inverterRouter = express.Router();
import path from "path";
import multer from 'multer';
import { fileURLToPath } from 'url';
import fs from 'fs';


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

inverterRouter.post("/create",
    upload.single("inverterImage"),
    [
        // Validate the name field
        body('type', 'Please Enter A Type').trim().notEmpty(),
        body('strength', 'Please Enter The strength').trim().notEmpty(),
        body('description', 'Please Enter The Description').trim().notEmpty(),
    ],
    (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Create the category object
        const inverterObj = {
            type: req.body.type,
            description: req.body.description,
            strength: req.body.strength
        };

        // Add the categoryImage field if a file was uploaded
        if (req.file) {
            inverterObj.inverterImage = 'http://localhost:5000/public/' + req.file.filename;
        }

        // Save the category to the database
        const inv = new Inverter(solarObj);
        inv.save((error, solar) => {
            if (error) return res.status(400).json({ error });
            if (solar) {
                return res.status(201).json({ solar });
            }
        });
    }
);


inverterRouter.put('/inverter/update/:id', upload.single("inverterImage"), async (req, res) => {
    const inverter = await Inverter.findById(req.params.id);

    if (inverter) {
        inverter.name = req.body.name || inverter.type;
        inverter.strength = req.body.strength || inverter.strength;
        inverter.description = req.body.description || inverter.description;

        if (req.file) {
            // Extract the filename from the categoryImage URL
            const oldImagePath = path.join(path.dirname(__dirname), "uploads/") + inverter.inverterImage.split('/').pop();
            fs.unlinkSync(oldImagePath); // Delete the old image
            inverter.inverterImage = 'http://localhost:5000/public/' + req.file.filename;
        }

        const updatedInverter = await inverter.save();

        res.send({
            _id: updatedInverter._id,
            type: updatedInverter.type,
            description: updatedInverter.description,
            strength: updatedInverter.strength,
            inverterImage: updatedInverter.inverterImage,
        });
    } else {
        res.status(401).send({ message: "Unknown id" });
    }
});


inverterRouter.get('/get', (req, res) => {
    Inverter.find().exec((err, inverter) => {
        if (err) {
            res.json({ message: err.message });
        } else {

            res.send(inverter)

        }
    })
});



inverterRouter.delete('/inverter/delete/:id', async (req, res) => {
    try {
        const inverter = await Inverter.findById(req.params.id);
        if (!inverter) {
            return res.status(404).json({ message: 'inverter not found' });
        }

        // Remove the battery image from the server file system
        const imagePath = path.join(path.dirname(__dirname), "uploads/") + inverter.inverterImage.split('/').pop();
        fs.unlinkSync(imagePath, (err) => {
            if (err) {
                console.error(err);
            }
        });

        await Inverter.findByIdAndRemove(req.params.id);
        res.status(201).json({ message: 'inverter removed' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default inverterRouter;
