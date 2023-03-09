import express from 'express';
import Solar from "../models/solarModel.js";
import shortid from 'shortid';
import { body, validationResult } from 'express-validator';
import path from "path";
import multer from 'multer';
import { fileURLToPath } from 'url';
import fs from 'fs';
const solarRouter = express.Router();

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

solarRouter.post("/create", upload.single("solarImage"),
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
        const solarObj = {
            type: req.body.type,
            description: req.body.description,
            strength: req.body.strength
        };

        // Add the categoryImage field if a file was uploaded
        if (req.file) {
            solarObj.solarImage = 'http://localhost:5000/public/' + req.file.filename;
        }

        // Save the category to the database
        const sol = new Solar(solarObj);
        sol.save((error, solar) => {
            if (error) return res.status(400).json({ error });
            if (solar) {
                return res.status(201).json({ solar });
            }
        });
    }
);


solarRouter.put('/solar/update/:id', upload.single("solarImage"), async (req, res) => {
    const solar = await Solar.findById(req.params.id);

    if (solar) {
        solar.name = req.body.name || solar.type;
        solar.strength = req.body.strength || solar.strength;
        solar.description = req.body.description || solar.description;

        if (req.file) {
            // Extract the filename from the categoryImage URL
            const oldImagePath = path.join(path.dirname(__dirname), "uploads/") + solar.solarImage.split('/').pop();
            fs.unlinkSync(oldImagePath); // Delete the old image
            solar.solarImage = 'http://localhost:5000/public/' + req.file.filename;
        }

        const updatedSolar = await solar.save();

        res.send({
            _id: updatedSolar._id,
            type: updatedSolar.type,
            description: updatedSolar.description,
            strength: updatedSolar.strength,
            solarImage: updatedSolar.solarImage,
        });
    } else {
        res.status(401).send({ message: "Unknown id" });
    }
});


solarRouter.get('/get', (req, res) => {
    Solar.find().exec((err, solar) => {
        if (err) {
            res.json({ message: err.message });
        } else {

            res.send(solar)

        }
    })
});



solarRouter.delete('/solar/delete/:id', async (req, res) => {
    try {
        const solar = await Solar.findById(req.params.id);
        if (!solar) {
            return res.status(404).json({ message: 'solar not found' });
        }

        // Remove the battery image from the server file system
        const imagePath = path.join(path.dirname(__dirname), "uploads/") + solar.solarImage.split('/').pop();
        fs.unlinkSync(imagePath, (err) => {
            if (err) {
                console.error(err);
            }
        });

        await Solar.findByIdAndRemove(req.params.id);
        res.status(201).json({ message: 'Solar removed' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

export default solarRouter;
