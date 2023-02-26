import mongoose from "mongoose";

const batterySchema = new mongoose.Schema({
    type: {type: String, required: true},
    capacity: {type: String, required: true, unique: true},
    description: {type: String, required: true},
},
{
    timestamps: true,
}
);

const Battery = mongoose.model("Battery", batterySchema);

export default Battery;