import Inverter from "../models/inverterModel.js";
import shortid from 'shortid';
import { body, validationResult } from 'express-validator';
import express from 'express';
import path from "path";
import multer from 'multer';
import { fileURLToPath } from 'url';
import fs from 'fs';
import expressAsyncHandler from 'express-async-handler';
import passport from "passport";
import System from "../models/systemModel.js";

const inverterRouter = express.Router();


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
passport.authenticate('jwt', { session: false }),
    upload.single("inverterImage"),
    [

        body('type', 'Please enter a type').trim().notEmpty().isString().isLength({ max: 25 })
            .withMessage('Type must be a string with maximum length of 25 characters'),
        body('strength', 'Please enter a strength').trim().notEmpty().isNumeric().isLength({ min: 2, max: 3 })
            .withMessage('strength must be a three digit number'),
        body('description', 'Please enter a description').trim().notEmpty().isString().isLength({ max: 255 })
            .withMessage('Description must be a string with maximum length of 255 characters'),
    ],
    //     (req, res) => {
    //         // Check for validation errors
    //         const errors = validationResult(req);
    //         if (!errors.isEmpty()) {
    //             return res.status(400).json({ errors: errors.array() });
    //         }

    //         // Create the category object
    //         const inverterObj = {
    //             type: req.body.type,
    //             description: req.body.description,
    //             strength: req.body.strength
    //         };

    //         // Add the categoryImage field if a file was uploaded
    //         if (req.file) {
    //             inverterObj.inverterImage = 'http://localhost:5000/public/' + req.file.filename;
    //         }

    //         // Save the category to the database
    //         const inv = new Inverter(inverterObj);
    //         inv.save((error, inverter) => {
    //             if (error) return res.status(400).json({ error });
    //             if (inverter) {
    //                 return res.status(201).json({ inverter });
    //             }
    //         });
    //     }
    // );

    expressAsyncHandler(async (req, res) => {
        const existingInverter = await Inverter.findOne({ type: req.body.type });
        if (existingInverter) {
            if (req.file) {
                await fs.unlinkSync(req.file.path); // Delete the uploaded file
            }
            return res.status(422).json({ message: 'Inverter exists already!' });

        }

        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            if (req.file) {
                fs.unlinkSync(req.file.path); // Delete the uploaded file
                // return res.status(400).json({ errors: errors.array() });
            }
            return res.status(400).json({ errors: errors.array() });

        }

        // Create the battery object
        const inverterObj = {
            type: req.body.type,
            strength: req.body.strength,
            description: req.body.description
        };

        // Add the batteryImage field if a file was uploaded
        if (req.file) {
            inverterObj.inverterImage = 'http://localhost:5000/public/' + req.file.filename;
        }

        // Save the battery to the database
        const inv = new Inverter(inverterObj);
        inv.save((error, inverter) => {
            if (error) return res.status(400).json({ error });
            if (inverter) {
                return res.status(201).json({ inverter });
            }
        });
    }
    ));

inverterRouter.put('/inverter/update/:id',
passport.authenticate('jwt', { session: false }), upload.single("inverterImage"),

    [
        // Validate the fields
        body('type', 'Please enter a type').trim().notEmpty().isString().isLength({ max: 25 })
            .withMessage('Type must be a string with maximum length of 25 characters'),
        body('strength', 'Please enter a strength').trim().notEmpty().isNumeric().isLength({ min: 1 })
            .withMessage('Strength must be a three digit number'),
        body('description', 'Please enter a description').trim().notEmpty().isString().isLength({ max: 255 })
            .withMessage('Description must be a string with maximum length of 255 characters'),
    ],




    expressAsyncHandler(async (req, res) => {
        const existingInverter = await Inverter.findOne({ type: req.body.type, _id: { $ne: req.params.id } });
        if (existingInverter) {
            if (req.file) {
                await fs.unlinkSync(req.file.path); // Delete the uploaded file
            }
            return res.status(422).json({ message: 'Inverter exists already!' });

        }
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const inverter = await Inverter.findById(req.params.id);

        if (inverter) {
            inverter.type = req.body.type || inverter.type;
            inverter.capacity = req.body.inverter || inverter.inverter;
            inverter.description = req.body.description || inverter.description;



            if (req.file) {
                // Extract the filename from the batteryImage URL
                const oldImagePath = path.join(path.dirname(__dirname), "uploads/") + inverter.inverterImage.split('/').pop();
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath); // Delete the old image
                } inverter.inverterImage = 'http://localhost:5000/public/' + req.file.filename;
            }

            const updatedInverter = await inverter.save();

            res.send({
                _id: updatedInverter._id,
                type: updatedInverter.type,
                strength: updatedInverter.strength,
                inverterImage: updatedInverter.inverterImage,
                description: updatedInverter.description
            });
        } else {
            res.status(401).send({ message: "Unknown id" });
        }
    }));



inverterRouter.get('/get',
passport.authenticate('jwt', { session: false }), (req, res) => {
    Inverter.find().exec((err, inverter) => {
        if (err) {
            res.json({ message: err.message });
        } else {

            res.send(inverter)

        }
    })
});

inverterRouter.delete('/inverter/delete/:id',
passport.authenticate('jwt', { session: false }),
    expressAsyncHandler(async (req, res) => {
        try {
            const inverter = await Inverter.findById(req.params.id);
            if (!inverter) {
                return res.status(404).json({ message: 'inverter not found' });
            }

            const isSystemExists = await System.findOne({inverterId: inverter._id})

            if(isSystemExists){
              await System.deleteOne({inverterId: inverter._id})
            }
            // Remove the battery image from the server file system
            if (inverter.inverterImage) {
                const imagePath = path.join(path.dirname(__dirname), "uploads/") + inverter.inverterImage.split('/').pop();
                // fs.unlinkSync(imagePath);   
                if (fs.existsSync(imagePath)) { // Check if the image file exists
                    fs.unlinkSync(imagePath);
                }
            }


            await Inverter.findByIdAndRemove(req.params.id);
            res.status(201).json({ message: 'Inverter removed' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    }));


export default inverterRouter;
