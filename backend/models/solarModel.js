import mongoose from "mongoose";

const solarSchema = new mongoose.Schema({
    type: { type: String, required: true },
    strength: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    solarImage: { type: String },
},
    {
        timestamps: true,
    }
);

const Solar = mongoose.model("Solar", solarSchema);

export default Solar;