import mongoose from "mongoose";

const systemSchema = new mongoose.Schema({
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Client',
        // unique: true
    },
    SolarPanelId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Solar'
    },
    numberSolarPanel: { type: Number, required: true },
    BatteryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Battery'
    },
    numberBattery: { type: Number, required: true },
    inverterId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Inverter'
    },
    numberInverter: { type: Number, required: true },
    solarApi: {type: Array, required: true},
    SystemNumber: {type: Number, required: true, default:0}
},
    {
        timestamps: true,
    }
);

const System = mongoose.model("System", systemSchema);

export default System;