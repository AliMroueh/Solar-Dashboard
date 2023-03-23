import express from 'express';
import Solar from "../models/solarModel.js";
import shortid from 'shortid';
import { body, validationResult } from 'express-validator';
import path from "path";
import multer from 'multer';
import { fileURLToPath } from 'url';
import fs from 'fs';
import expressAsyncHandler from 'express-async-handler';
import System from '../models/systemModel.js';
import Client from '../models/clientModel.js';

const systemRouter = express.Router();

systemRouter.post("/create",
    [
        body('clientId', 'Please choose a user').trim().notEmpty().isString().withMessage('Type must be a string with maximum length of 25 characters'),
        body('SolarPanelId', 'Please enter a strength').trim().notEmpty().isString().withMessage('solarPanelId must be a three digit number'),
        body('numberSolarPanel', 'Please enter a numberSolarPanel').trim().notEmpty().isNumeric().isLength({ max: 3 }).withMessage('numberSolarPanel must be 3 digits'),
        body('BatteryId', 'Please enter a strength').trim().notEmpty().isString().withMessage('BatterylId must be a three digit number'),
        body('numberBattery', 'Please enter a numberBattery').trim().notEmpty().isNumeric().isLength({ max: 3 }).withMessage('numberBattery must be 3 digits'),
        body('inverterId', 'Please choose a user').trim().notEmpty().isString().withMessage('Type must be a string with maximum length of 25 characters'),
        body('numberInverter', 'Please enter a numberInverter').trim().notEmpty().isNumeric().isLength({ max: 3 }).withMessage('numberInverter must must be 3 digits'),
    ],
    expressAsyncHandler(async (req, res) => {

        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {

            return res.status(400).json({ errors: errors.array() });

        }

        const client = await Client.findOne({ _id: req.body.clientId });

        if(!client){
           return res.status(401).json({message: "client is not exists"})
        }

        const clientInSolar = await System.findOne({ clientId: req.body.clientId });

        if(clientInSolar){
           return res.status(401).json({message: "client is already exists in Solar"})
        }
        // Create the battery object
        const sysObj = {
            clientId: req.body.clientId,
            SolarPanelId: req.body.SolarPanelId,
            numberSolarPanel: req.body.numberSolarPanel,
            BatteryId: req.body.BatteryId,
            numberBattery: req.body.numberBattery,
            inverterId: req.body.inverterId,
            numberInverter: req.body.numberInverter
        };

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

// systemRouter.get('/get', (req, res) => {
//         System.find().exec((err, systems) => {
//             if (err) {
//             res.json({ message: err.message });
//         } else {
//             let ar = []
//             let nc = ''
//             systems.forEach(async sys => 
//                {
//                 const client = await Client.findById(sys.clientId);
//                 return ar.push(client)
//             }
//                 )
//                 return res.send(ar)
//         }
//     })
// });

systemRouter.get('/get', async (req, res) => {
    try {
        const systems = await System.find().exec();
        const clients = await Promise.all(systems.map(sys => Client.findById(sys.clientId).exec()));
        const result = systems.map((sys, index) => ({
            system: sys,
            client: clients[index]
        }));
        return res.send(result);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});


systemRouter.put('/system/update/:id',
        // upload.single("solarImage"),
        [
            body('clientId', 'Please choose a user').trim().notEmpty().isString()
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
    
                system.clientId = req.body.clientId || system.clientId,
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
    
                    clientId: updatedSystem.clientId,
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





// for select 




systemRouter.get(
    '/solars',
    expressAsyncHandler(async (req, res) => {

        const solars = await Solar.find().distinct('solar');
        res.send(solars);
    })
);



systemRouter.get(
    '/batteries',
    expressAsyncHandler(async (req, res) => {

        const batteries = await battery.find().distinct('battery');
        res.send(batteries);
    })
);

systemRouter.get(
    '/inverters',
    expressAsyncHandler(async (req, res) => {

        const inverters = await inverters.find().distinct('inverter');
        res.send(inverters);
    })
);


systemRouter.get(
    '/clients',
    expressAsyncHandler(async (req, res) => {

        const clients = await clients.find().distinct('client');
        res.send(clients);
    })
);


export default systemRouter;
