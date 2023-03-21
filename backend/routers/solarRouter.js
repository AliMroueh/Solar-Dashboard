import express from 'express';
import Solar from "../models/solarModel.js";
import shortid from 'shortid';
import { body, validationResult } from 'express-validator';
import path from "path";
import multer from 'multer';
import { fileURLToPath } from 'url';
import fs from 'fs';
import expressAsyncHandler from 'express-async-handler';
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
        body('type', 'Please enter a type').trim().notEmpty().isString().isLength({ max: 25 })
            .withMessage('Type must be a string with maximum length of 25 characters'),
        body('strength', 'Please enter a strength').trim().notEmpty().isNumeric().isLength({ min: 2, max: 3 })
            .withMessage('strength must be a three digit number'),
        body('description', 'Please enter a description').trim().notEmpty().isString().isLength({ max: 255 })
            .withMessage('Description must be a string with maximum length of 255 characters'),
    ],



    // expressAsyncHandler(async (req, res) => {
    //     const existingBattery = await Battery.findOne({ type: req.body.type });
    //     if (existingBattery) {
    //         if (req.file) {
    //             await fs.unlinkSync(req.file.path); // Delete the uploaded file
    //         }
    //         return res.status(422).json({ message: 'Battery exists already!' });

    //     }
    //     (req, res) => {
    //         // Check for validation errors
    //         const errors = validationResult(req);
    //         if (!errors.isEmpty()) {
    //             return res.status(400).json({ errors: errors.array() });
    //         }

    //         let solarImage = "";
    //         // Add the categoryImage field if a file was uploaded
    //         if (req.file) {
    //             solarImage = 'http://localhost:5000/public/' + req.file.filename;
    //         }
    //         // Create the category object
    //         const solarObj = {
    //             type: req.body.type,
    //             description: req.body.description,
    //             strength: req.body.strength,
    //             solarImage
    //         };



    //         // Save the category to the database
    //         const sol = new Solar(solarObj);
    //         sol.save((error, solar) => {
    //             if (error) return res.status(400).json({ error });
    //             if (solar) {
    //                 return res.status(201).json({ solar });
    //             }
    //         });



    //     }
    //  ));






    expressAsyncHandler(async (req, res) => {
        const existingSolar = await Solar.findOne({ type: req.body.type });
        if (existingSolar) {
            if (req.file) {
                await fs.unlinkSync(req.file.path); // Delete the uploaded file
            }
            return res.status(422).json({ message: 'Solar exists already!' });

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
        const solarObj = {
            type: req.body.type,
            strength: req.body.strength,
            description: req.body.description
        };

        // Add the batteryImage field if a file was uploaded
        if (req.file) {
            solarObj.solarImage = 'http://localhost:5000/public/' + req.file.filename;
        }

        // Save the battery to the database
        const sol = new Solar(solarObj);
        sol.save((error, solar) => {
            if (error) return res.status(400).json({ error });
            if (solar) {
                return res.status(201).json({ solar });
            }
        });
    }
    ));




solarRouter.put('/solar/update/:id', upload.single("solarImage"),
    [
        // Validate the fields
        body('type', 'Please enter a type').trim().notEmpty().isString().isLength({ max: 25 })
            .withMessage('Type must be a string with maximum length of 25 characters'),
        body('strength', 'Please enter a strength').trim().notEmpty().isNumeric().isLength({ min: 2, max: 3 })
            .withMessage('Strength must be a three digit number'),
        body('description', 'Please enter a description').trim().notEmpty().isString().isLength({ max: 255 })
            .withMessage('Description must be a string with maximum length of 255 characters'),
    ],
    //     const solar = await Solar.findById(req.params.id);

    //     if (solar) {
    //         solar.type = req.body.type || solar.type;
    //         solar.strength = req.body.strength || solar.strength;
    //         solar.description = req.body.description || solar.description;

    //         if (req.file) {
    //             // Extract the filename from the categoryImage URL
    //             const oldImagePath = path.join(path.dirname(__dirname), "uploads/") + solar.solarImage.split('/').pop();
    //             fs.unlinkSync(oldImagePath); // Delete the old image
    //             solar.solarImage = 'http://localhost:5000/public/' + req.file.filename;
    //         }

    //         const updatedSolar = await solar.save();

    //         res.send({
    //             _id: updatedSolar._id,
    //             type: updatedSolar.type,
    //             description: updatedSolar.description,
    //             strength: updatedSolar.strength,
    //             solarImage: updatedSolar.solarImage,
    //         });
    //     } else {
    //         res.status(401).send({ message: "Unknown id" });
    //     }
    // });


    // solarRouter.get('/get', (req, res) => {
    //     Solar.find().exec((err, solar) => {
    //         if (err) {
    //             res.json({ message: err.message });
    //         } else {

    //             res.send(solar)

    //         }
    //     })
    // });




    expressAsyncHandler(async (req, res) => {
        const existingSolar = await Solar.findOne({ type: req.body.type, _id: { $ne: req.params.id } });
        if (existingSolar) {
            if (req.file) {
                await fs.unlinkSync(req.file.path); // Delete the uploaded file
            }
            return res.status(422).json({ message: 'Solar exists already!' });

        }
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const solar = await Solar.findById(req.params.id);

        if (solar) {
            solar.type = req.body.type || solar.type;
            solar.capacity = req.body.solar || solar.solar;
            solar.description = req.body.description || solar.description;



            if (req.file) {
                // Extract the filename from the batteryImage URL
                const oldImagePath = path.join(path.dirname(__dirname), "uploads/") + solar.solarImage.split('/').pop();
                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath); // Delete the old image
                  }                solar.solarImage = 'http://localhost:5000/public/' + req.file.filename;
            }

            const updatedSolar = await solar.save();

            res.send({
                _id: updatedSolar._id,
                type: updatedSolar.type,
                strength: updatedSolar.strength,
                solarImage: updatedSolar.solarImage,
                description: updatedSolar.description
            });
        } else {
            res.status(401).send({ message: "Unknown id" });
        }
    }));

solarRouter.get('/get', (req, res) => {
    Solar.find().exec((err, solars) => {
        if (err) {
            res.json({ message: err.message });
        } else {

            res.send(solars)

        }
    })
});







// solarRouter.delete('/solar/delete/:id', async (req, res) => {
//     try {
//         const solar = await Solar.findById(req.params.id);
//         if (!solar) {
//             return res.status(404).json({ message: 'solar not found' });
//         }

//         // Remove the battery image from the server file system
//         const imagePath = path.join(path.dirname(__dirname), "uploads/") + solar.solarImage.split('/').pop();
//         fs.unlinkSync(imagePath, (err) => {
//             if (err) {
//                 console.error(err);
//             }
//         });

//         await Solar.findByIdAndRemove(req.params.id);
//         res.status(201).json({ message: 'Solar removed' });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Server error' });
//     }
// });






solarRouter.delete('/solar/delete/:id',
    expressAsyncHandler(async (req, res) => {
        try {
            const solar = await Solar.findById(req.params.id);
            if (!solar) {
                return res.status(404).json({ message: 'solar not found' });
            }

            // Remove the battery image from the server file system
            if (solar.solarImage) {
                const imagePath = path.join(path.dirname(__dirname), "uploads/") + solar.solarImage.split('/').pop();
                // fs.unlinkSync(imagePath);   
                if (fs.existsSync(imagePath)) { // Check if the image file exists
                    fs.unlinkSync(imagePath);
                }
            }


            await Solar.findByIdAndRemove(req.params.id);
            res.status(201).json({ message: 'Solar removed' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    }));


export default solarRouter;
