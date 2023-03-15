import { mailgun } from "../utils.js";
import express from 'express';
import expressAsyncHandler from "express-async-handler";

const emailRouter = express.Router();

emailRouter.post('/', expressAsyncHandler(async(req,res) => {
  try{
    mailgun()
  .messages()
  .send(
    {
      from: 'John Doe <john@mg.yourdomain.com>',
      to: `ali Mroueh <alimroueh9999@gmail.com>`,
      subject: `high consumption`,
      html: '<p>5afef 2estehlak ya man</p>',
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