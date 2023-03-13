import mongoose from "mongoose";

const batterySchema = new mongoose.Schema({
    type: {type: String,
         required: true},

    capacity: {type: Number,
         required: true,
          unique: true},

    batteryImage:{type:String},

    description: {type: String,
         required: true},
},
{
    timestamps: true,
}
);

const Battery = mongoose.model("Battery", batterySchema);

export default Battery;