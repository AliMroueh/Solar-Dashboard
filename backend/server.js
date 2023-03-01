import express from "express";
import mongoose from "mongoose";
import batteryRouter from "./routers/batteryRouter.js";
import clientRouter from "./routers/clientRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();
mongoose.connect('mongodb+srv://mhmd:1234@solar-dashboard.6gzozas.mongodb.net/solar-dashboard?retryWrites=true&w=majority',{
// mongoose.connect('mongodb://localhost/solar', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));

app.use('/api/users', userRouter);
app.use('/api/batteries', batteryRouter);
app.use('/api/clients', clientRouter);
app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.listen(5000, () => {
    console.log('Server at http://localhost:5000');
})