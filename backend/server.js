import express from "express";
import mongoose from "mongoose";
import batteryRouter from "./routers/batteryRouter.js";
import clientRouter from "./routers/clientRouter.js";
import userRouter from "./routers/userRouter.js";
import solarRouter from "./routers/solarRouter.js";
import inverterRouter from "./routers/inverterRouter.js";
import emailRouter from "./routers/emailRouter.js"

import { applyPassportStrategy, mailgun } from "./utils.js";
import path from "path";
import { fileURLToPath } from 'url';
import systemRouter from "./routers/systemRouter.js";
import passport from "passport";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// mongodb+srv://mhmd:1234@solar-dashboard.6gzozas.mongodb.net/solar-dashboard?retryWrites=true&w=majority


// mongodb+srv://yasser:database@main.twjbt8n.mongodb.net/solar-system?retryWrites=true&w=majority`
const app = express();
mongoose.set('strictQuery', true)
mongoose.connect(`mongodb+srv://yasser:database@main.twjbt8n.mongodb.net/solar-system?retryWrites=true&w=majority`, {
  // mongoose.connect('mongodb://localhost/solar', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

  .then(db => console.log('DB is connected'))
  .catch(err => console.log(err));
// these two middleware will transfer the data to req.body in the app
// a middleware that parse json data in the body of the request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use(passport.initialize());
// Apply strategy to passport
applyPassportStrategy(passport);

app.use('/api/users', userRouter);
app.use('/api/batteries', batteryRouter);
app.use('/api/solars', solarRouter);
app.use('/api/inverters', inverterRouter);
app.use('/api/clients', clientRouter);
app.use('/api/email', emailRouter);
app.use('/api/systems', systemRouter);

app.get('/', (req, res) => {
  res.send('Server is ready');
});
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});
app.listen(5000, () => {
  console.log('Server at http://localhost:5000');
})