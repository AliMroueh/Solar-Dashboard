import mongoose from "mongoose";

const solarSchema = new mongoose.Schema({
    type: { type: String, required: true },
    strength: { type: Number, required: true },
    description: { type: String, required: true },
    solarImage: { type: String, required: true },
},
    {
        timestamps: true,
    }
);

const Solar = mongoose.model("Solar", solarSchema);

export default Solar;