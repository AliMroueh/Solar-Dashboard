import express from "express";
import mongoose from "mongoose";
import batteryRouter from "./routers/batteryRouter.js";
import clientRouter from "./routers/clientRouter.js";
import userRouter from "./routers/userRouter.js";
import solarRouter from "./routers/solarRouter.js";
import inverterRouter from "./routers/inverterRouter.js";

const app = express();
mongoose.connect(`mongodb+srv://yasser:database@cluster0.zcaxve0.mongodb.net/system?retryWrites=true&w=majority`, {
    // mongoose.connect('mongodb://localhost/solar', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

app.use('/api/users', userRouter);
app.use('/api/batteries', batteryRouter);
app.use('/api/solar', solarRouter);
app.use('/api/inverter', inverterRouter);
app.use('/api/clients', clientRouter);
app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.listen(5000, () => {
    console.log('Server at http://localhost:5000');
})