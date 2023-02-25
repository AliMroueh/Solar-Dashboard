import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";

const app = express();

mongoose.connect('mongodb://localhost/solar', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.listen(5000, () => {
    console.log('Server at http://localhost:5000');
})