import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    name: {type: String,
         required: true},
         
    clientImage: {type: String},

    email: {type: String,
         required: true,
          unique: true},

    address: {type: String},
    
    phone: {type: Number}
},
{
    timestamps: true,
}
);

const Client = mongoose.model("Client", clientSchema);

export default Client;