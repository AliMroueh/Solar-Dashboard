import { mailgun } from "../utils.js";
import express from 'express';
import expressAsyncHandler from "express-async-handler";
import passport from "passport";

const emailRouter = express.Router();

emailRouter.post('/',
passport.authenticate('jwt', { session: false }),
 expressAsyncHandler(async(req,res) => {
  console.log(req.body)
  const {name, email, subject, message}= req.body;
  try{
    mailgun()
  .messages()
  .send(
    {
      from: 'John Doe <john@mg.yourdomain.com>',
      // from: `${sender} <john@mg.yourdomain.com>`,
      to: `${name} <${email}>`,
      // subject: `high consumption`,
      subject: `${subject}`,
      // html: '<p>5afef 2estehlak ya man</p>',
      html: `<p>${message}</p>`,
    },
    (error, body) => {
      if (error) {
        console.log(error);
      } else {
        console.log(body);
      }
    }
  );
  res.send({message: 'email sent successfully'})
  }catch(err){
    res.status(401).send({message: err})
  }
} )
)

export default emailRouter