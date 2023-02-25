import mongoose from "mongoose";

const systemSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    SolarPanelId : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Solar'
    },
    numberSolarPanel: {type: Number, required: true},
    BatteryId : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Battery'
    },
    numberBattery: {type: Number, required: true},
    inverterId : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Inverter'
    },
    numberInverter : {type: Number, required: true},
},
{
    timestamps: true,
}
);

const System = mongoose.model("System", userSchema);

export default System;