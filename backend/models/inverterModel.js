import mongoose from "mongoose";

const inverterSchema = new mongoose.Schema({
    type: {type: String, required: true},
    strength: {type: String, required: true, unique: true},
    description: {type: String, required: true},
},
{
    timestamps: true,
}
);

const Inverter = mongoose.model("Inverter", userSchema);

export default Inverter;