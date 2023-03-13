import mongoose from "mongoose";

const inverterSchema = new mongoose.Schema({
    type: { type: String, required: true },
    strength: { type: Number, required: true },
    description: { type: String, required: true },
    inverterImage: { type: String },
},
    {
        timestamps: true,
    }
);

const Inverter = mongoose.model("Inverter", inverterSchema);

export default Inverter;