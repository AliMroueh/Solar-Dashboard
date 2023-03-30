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
import Battery from '../models/batteryModel.js';
import Inverter from '../models/inverterModel.js';
import passport from 'passport';

const systemRouter = express.Router();

systemRouter.get(
  '/summary',
  // passport.authenticate('jwt', { session: false }),
  // isAdmin(),
  expressAsyncHandler(async (req, res) => {
    const clients = await Client.aggregate([
      {
        $group: {
          //   _id still null
          _id: null,
          // numOrders incrememt by one every order
          numClients: { $sum: 1 },
        },
      },
    ]);
    const batteries = await Battery.aggregate([
      {
        $group: {
          _id: null,
          numBatteries: { $sum: 1 },
        },
      },
    ]);
    const inverters = await Inverter.aggregate([
      {
        $group: {
          _id: null,
          numInverter: { $sum: 1 },
        },
      },
    ]);

    const solars = await Solar.aggregate([
      {
        $group: {
          _id: '$category',
          numSolars: { $sum: 1 },
        },
      },
    ]);

    const systems = await System.aggregate([
      {
        $group: {
          _id: '$category',
          numSystem: { $sum: 1 },
        },
      },
    ]);
    res.send({ clients, inverters, batteries, solars, systems });
  })
);

systemRouter.post("/create",
  passport.authenticate('jwt', { session: false }),
  [
    body('clientId', 'Please choose a client').trim().notEmpty().isString().withMessage('Type must be a string with maximum length of 25 characters'),
    body('SolarPanelId', 'Please enter a Solar Panel').trim().notEmpty().isString().withMessage('solarPanelId must be a three digit number'),
    body('numberSolarPanel', 'Please enter a count of Solar Panel').trim().notEmpty().isNumeric().isLength({ max: 3 }).withMessage('numberSolarPanel must be 3 digits'),
    body('BatteryId', 'Please choose a battery').trim().notEmpty().isString().withMessage('BatterylId must be a three digit number'),
    body('numberBattery', 'Please enter a count of Batteries').trim().notEmpty().isNumeric().isLength({ max: 3 }).withMessage('numberBattery must be 3 digits'),
    body('inverterId', 'Please choose an inverter').trim().notEmpty().isString().withMessage('Type must be a string with maximum length of 25 characters'),
    body('numberInverter', 'Please enter a count of inverters').trim().notEmpty().isNumeric().isLength({ max: 3 }).withMessage('numberInverter must must be 3 digits'),
  ],
  expressAsyncHandler(async (req, res) => {

    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {

      return res.status(400).json({ errors: errors.array() });

    }

    const client = await Client.findOne({ _id: req.body.clientId });

    if (!client) {
      return res.status(401).json({ message: "client is not exists" })
    }

    const clientInSolar = await System.findOne({ clientId: req.body.clientId });
    if (clientInSolar) {
      console.log(clientInSolar.SystemNumber)
    }

    let theSystemNumber = (clientInSolar && clientInSolar.SystemNumber + 1) || 0


    // Create the battery object
    const sysObj = {
      clientId: req.body.clientId,
      SolarPanelId: req.body.SolarPanelId,
      numberSolarPanel: req.body.numberSolarPanel,
      BatteryId: req.body.BatteryId,
      numberBattery: req.body.numberBattery,
      inverterId: req.body.inverterId,
      numberInverter: req.body.numberInverter,
      solarApi: [
        { date: '6 am', Solar_production: 500, Load_consumption: 200, Storage_production: 200 },
        { date: '7 am', Solar_production: 600, Load_consumption: 300, Storage_production: 250 },
        { date: '8 am', Solar_production: 600, Load_consumption: 300, Storage_production: 300 },
        { date: '9 am', Solar_production: 700, Load_consumption: 500, Storage_production: 400 },
        { date: '10 am', Solar_production: 900, Load_consumption: 600, Storage_production: 500 },
        { date: '11 am', Solar_production: 1000, Load_consumption: 700, Storage_production: 600 },
        { date: '12 pm', Solar_production: 1000, Load_consumption: 800, Storage_production: 700 },
        { date: '1 pm', Solar_production: 1000, Load_consumption: 900, Storage_production: 700 },
        { date: '2 pm', Solar_production: 1000, Load_consumption: 800, Storage_production: 700 },
        { date: '3 pm', Solar_production: 1000, Load_consumption: 800, Storage_production: 700 },
        { date: '4 pm', Solar_production: 900, Load_consumption: 500, Storage_production: 700 },
        { date: '5 pm', Solar_production: 900, Load_consumption: 500, Storage_production: 700 },
        { date: '6 pm', Solar_production: 600, Load_consumption: 400, Storage_production: 690 },
        { date: '7 pm', Solar_production: 500, Load_consumption: 300, Storage_production: 680 },
        { date: '8 pm', Solar_production: 400, Load_consumption: 200, Storage_production: 640 },
        { date: '9 pm', Solar_production: 300, Load_consumption: 100, Storage_production: 600 },
        { date: '10 pm', Solar_production: 400, Load_consumption: 200, Storage_production: 550 },
        { date: '11 pm', Solar_production: 600, Load_consumption: 200, Storage_production: 500 },
        { date: '12 am', Solar_production: 400, Load_consumption: 200, Storage_production: 400 },
        { date: '1 am', Solar_production: 300, Load_consumption: 100, Storage_production: 390 },
        { date: '2 am', Solar_production: 200, Load_consumption: 0, Storage_production: 380 },
        { date: '3 am', Solar_production: 400, Load_consumption: 200, Storage_production: 370 },
        { date: '4 am', Solar_production: 300, Load_consumption: 100, Storage_production: 300 },
        { date: '5 am', Solar_production: 400, Load_consumption: 100, Storage_production: 200 },
      ],
      SystemNumber: theSystemNumber
    };
    console.log(sysObj)
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

systemRouter.get('/get',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      const systems = await System.find().exec();
      const clients = await Promise.all(systems.map(sys => Client.findById(sys.clientId).exec()));
      const solarPanel = await Promise.all(systems.map(sys => Solar.findById(sys.SolarPanelId).exec()));
      const battery = await Promise.all(systems.map(sys => Battery.findById(sys.BatteryId).exec()));
      const inverter = await Promise.all(systems.map(sys => Inverter.findById(sys.inverterId).exec()));

      const result = systems.map((sys, index) => ({
        systemId: sys._id,
        client: clients[index],
        solarPanel: solarPanel[index],
        numberSolarPanel: sys.numberSolarPanel,
        battery: battery[index],
        numberBattery: sys.numberBattery,
        inverter: inverter[index],
        numberInverter: sys.numberInverter,
        solarApi: sys.solarApi,
        SystemNumber: sys.SystemNumber + 1
      }));

      return res.send(result);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  });


systemRouter.put('/update/:id',
  passport.authenticate('jwt', { session: false }),
  [
    body('clientId', 'Please choose a client').trim().notEmpty().isString().withMessage('Type must be a string with maximum length of 25 characters'),
    body('SolarPanelId', 'Please enter a Solar Panel').trim().notEmpty().isString().withMessage('solarPanelId must be a three digit number'),
    body('numberSolarPanel', 'Please enter a count of Solar Panel').trim().notEmpty().isNumeric().isLength({ max: 3 }).withMessage('numberSolarPanel must be 3 digits'),
    body('BatteryId', 'Please choose a battery').trim().notEmpty().isString().withMessage('BatterylId must be a three digit number'),
    body('numberBattery', 'Please enter a count of Batteries').trim().notEmpty().isNumeric().isLength({ max: 3 }).withMessage('numberBattery must be 3 digits'),
    body('inverterId', 'Please choose an inverter').trim().notEmpty().isString().withMessage('Type must be a string with maximum length of 25 characters'),
    body('numberInverter', 'Please enter a count of inverters').trim().notEmpty().isNumeric().isLength({ max: 3 }).withMessage('numberInverter must must be 3 digits'),
  ],
  expressAsyncHandler(async (req, res) => {
    console.log(req.body)
    const system = await System.findById(req.params.id);

    if (system) {

      system.clientId = req.body.clientId || system.clientId,
        system.SolarPanelId = req.body.SolarPanelId || system.SolarPanelId,
        system.numberSolarPanel = req.body.numberSolarPanel || system.numberSolarPanel,
        system.BatteryId = req.body.BatteryId || system.BatteryId,
        system.numberBattery = req.body.numberBattery || system.numberBattery,
        system.inverterId = req.body.inverterId || system.inverterId,
        system.numberInverter = req.body.numberInverter || system.numberInverter

      const updatedSystem = await system.save();

      res.send({
        clientId: updatedSystem.clientId,
        SolarPanelId: updatedSystem.SolarPanelId,
        numberSolarPanel: updatedSystem.numberSolarPanel,
        BatteryId: updatedSystem.BatteryId,
        numberBattery: updatedSystem.numberBattery,
        inverterId: updatedSystem.inverterId,
        numberInverter: updatedSystem.numberInverter
      });
    } else {
      res.status(401).send({ message: "Unknown id" });
    }
  }));



systemRouter.delete('/delete/:id',
  passport.authenticate('jwt', { session: false }),
  expressAsyncHandler(async (req, res) => {
    try {
      const system = await System.findById(req.params.id);
      if (!system) {
        return res.status(404).json({ message: 'system not found' });
      }
      await System.findByIdAndRemove(req.params.id);
      res.status(201).json({ message: 'System removed' });
    } catch (err) {
      // console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  }));

// for select 

// systemRouter.get(
//     '/solars',
//     expressAsyncHandler(async (req, res) => {

//         const solars = await Solar.find().distinct('solar');
//         res.send(solars);
//     })
// );
// systemRouter.get(
//     '/batteries',
//     expressAsyncHandler(async (req, res) => {

//         const batteries = await battery.find().distinct('battery');
//         res.send(batteries);
//     })
// );
// systemRouter.get(
//     '/inverters',
//     expressAsyncHandler(async (req, res) => {

//         const inverters = await inverters.find().distinct('inverter');
//         res.send(inverters);
//     })
// );
// systemRouter.get(
//     '/clients',
//     expressAsyncHandler(async (req, res) => {

//         const clients = await clients.find().distinct('client');
//         res.send(clients);
//     })
// );


export default systemRouter;
