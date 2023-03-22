import express from 'express';
import Solar from "../models/solarModel.js";
import shortid from 'shortid';
import { body, validationResult } from 'express-validator';
import path from "path";
import multer from 'multer';
import { fileURLToPath } from 'url';
import fs from 'fs';
import expressAsyncHandler from 'express-async-handler';
const systemRouter = express.Router();

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





// userId // SolarPanelId///  numberSolarPanel//  BatteryId //  numberBattery ///  inverterId //  numberInverter 

const upload = multer({ storage });

systemRouter.post("/create",
    //  upload.single("solarImage"),
    [
        body('userId', 'Please choose a user').trim().notEmpty().isString()
            .withMessage('Type must be a string with maximum length of 25 characters'),
        body('SolarPanelId', 'Please enter a strength').trim().notEmpty().isString()
            .withMessage('solarPanelId must be a three digit number'),
        body('numberSolarPanel', 'Please enter a numberSolarPanel').trim().notEmpty().isNumeric().isLength({ max: 3 })
            .withMessage('numberSolarPanel must ....'),
        body('BatterylId', 'Please enter a strength').trim().notEmpty().isString()
            .withMessage('BatterylId must be a three digit number'),
        body('numberBattery', 'Please enter a numberBattery').trim().notEmpty().isNumeric().isLength({ max: 3 })
            .withMessage('numberBattery must ....'),
        body('inverterId', 'Please choose a user').trim().notEmpty().isString()
            .withMessage('Type must be a string with maximum length of 25 characters'),
        body('numberInverter', 'Please enter a numberInverter').trim().notEmpty().isNumeric().isLength({ max: 3 })
            .withMessage('numberInverter must ....'),



    ],

    expressAsyncHandler(async (req, res) => {
        // const existingSolar = await Solar.findOne({ userId: req.body.userId });
        // if (existingSolar) {
        //     if (req.file) {
        //         await fs.unlinkSync(req.file.path); // Delete the uploaded file
        //     }
        //     return res.status(422).json({ message: 'Solar exists already!' });

        // }

        // Check for validation errors
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     if (req.file) {
        //         fs.unlinkSync(req.file.path); // Delete the uploaded file
        //         // return res.status(400).json({ errors: errors.array() });
        //     }
        //     return res.status(400).json({ errors: errors.array() });

        // }

        // const system = await System.findOne({ userId: req.body.userId });

        // Create the battery object
        const sysObj = {
            userId: req.body.userId,
            SolarPanelId: req.body.SolarPanelId,
            numberSolarPanel: req.body.numberSolarPanel,
            BatterylId: req.body.BatterylId,
            numberBattery: req.body.numberBattery,
            inverterId: req.body.inverterId,
            numberInverter: req.body.numberInverter
        };

        // Add the batteryImage field if a file was uploaded
        // if (req.file) {
        //     sysObj.solarImage = 'http://localhost:5000/public/' + req.file.filename;
        // }

        // Save the battery to the database
        const sys = new System(sysObj);
        sys.save((error, system) => {
            if (error) return res.status(400).json({ error });
            if (system) {
                return res.status(201).json({ system });
            }
        });
    }
    ));




systemRouter.put('/system/update/:id',
    // upload.single("solarImage"),
    [
        body('userId', 'Please choose a user').trim().notEmpty().isString()
            .withMessage('Type must be a string with maximum length of 25 characters'),
        body('SolarPanelId', 'Please enter a strength').trim().notEmpty().isString()
            .withMessage('solarPanelId must be a three digit number'),
        body('numberSolarPanel', 'Please enter a numberSolarPanel').trim().notEmpty().isNumeric().isLength({ max: 3 })
            .withMessage('numberSolarPanel must ....'),
        body('BatterylId', 'Please enter a strength').trim().notEmpty().isString()
            .withMessage('BatterylId must be a three digit number'),
        body('numberBattery', 'Please enter a numberBattery').trim().notEmpty().isNumeric().isLength({ max: 3 })
            .withMessage('numberBattery must ....'),
        body('inverterId', 'Please choose a user').trim().notEmpty().isString()
            .withMessage('Type must be a string with maximum length of 25 characters'),
        body('numberInverter', 'Please enter a numberInverter').trim().notEmpty().isNumeric().isLength({ max: 3 })
            .withMessage('numberInverter must ....'),



    ],



    expressAsyncHandler(async (req, res) => {
        // const existingSolar = await Solar.findOne({ type: req.body.type, _id: { $ne: req.params.id } });
        // if (existingSolar) {
        //     if (req.file) {
        //         await fs.unlinkSync(req.file.path); // Delete the uploaded file
        //     }
        //     return res.status(422).json({ message: 'Solar exists already!' });

        // }
        // // Check for validation errors
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(400).json({ errors: errors.array() });
        // }
        const system = await system.findById(req.params.id);

        if (system) {

            system.userId = req.body.userId || system.userId,
                system.SolarPanelId = req.body.SolarPanelId || system.SolarPanelId,
                system.numberSolarPanel = req.body.numberSolarPanel || system.numberSolarPanel,
                system.BatterylId = req.body.BatterylId || system.BatterylId,
                system.numberBattery = req.body.numberBattery || system.numberBattery,
                system.inverterId = req.body.inverterId || system.inverterId,
                system.numberInverter = req.body.numberInverter || system.numberInverter



            // if (req.file) {
            //     // Extract the filename from the batteryImage URL
            //     const oldImagePath = path.join(path.dirname(__dirname), "uploads/") + solar.solarImage.split('/').pop();
            //     if (fs.existsSync(oldImagePath)) {
            //         fs.unlinkSync(oldImagePath); // Delete the old image
            //     } solar.solarImage = 'http://localhost:5000/public/' + req.file.filename;
            // }

            const updatedSystem = await system.save();

            res.send({

                userId: updatedSystem.userId,
                SolarPanelId: updatedSystem.SolarPanelId,
                numberSolarPanel: updatedSystem.numberSolarPanel,
                BatterylId: updatedSystem.BatterylId,
                numberBattery: updatedSystem.numberBattery,
                inverterId: updatedSystem.inverterId,
                numberInverter: updatedSystem.numberInverter
            });
        } else {
            res.status(401).send({ message: "Unknown id" });
        }
    }));

systemRouter.get('/get', (req, res) => {
    System.find().exec((err, systems) => {
        if (err) {
            res.json({ message: err.message });
        } else {

            res.send(systems)

        }
    })
});













systemRouter.delete('/solar/delete/:id',
    expressAsyncHandler(async (req, res) => {
        try {
            const system = await System.findById(req.params.id);
            if (!system) {
                return res.status(404).json({ message: 'system not found' });
            }

            // Remove the battery image from the server file system
            if (system.systemImage) {
                const imagePath = path.join(path.dirname(__dirname), "uploads/") + system.systemImage.split('/').pop();
                // fs.unlinkSync(imagePath);   
                if (fs.existsSync(imagePath)) { // Check if the image file exists
                    fs.unlinkSync(imagePath);
                }
            }


            await System.findByIdAndRemove(req.params.id);
            res.status(201).json({ message: 'System removed' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
        }
    }));


export default systemRouter;
