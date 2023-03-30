import { mailgun } from "../utils.js";
import express from 'express';
import expressAsyncHandler from "express-async-handler";
import passport from "passport";

const emailRouter = express.Router();

emailRouter.post('/',
// passport.authenticate('jwt', { session: false }),
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

emailRouter.post('/energy',
// passport.authenticate('jwt', { session: false }),
 expressAsyncHandler(async(req,res) => {
  console.log(req.body)
  const {name, email, subject,date, Solar_production,Load_consumption,Storage_production}= req.body;
  try{
    const table = `
  <table>
    <tr>
      <th>Hour</th>
      <th>Solar_production</th>
      <th>Load_consumption</th>
      <th>Storage_production</th>
    </tr>
    <tr>
      <td>${date}</td>
      <td>${Solar_production}</td>
      <td>${Load_consumption}</td>
      <td>${Storage_production}</td>
    </tr>
  </table>
`;

const html = `
  <p>Dear ${name},</p>
  <p>We have noticed that your solar system has been consuming a high amount of energy in the past hour. Please see the table below for your energy usage over the past hour:</p>
  ${table}
  <p>Please let us know if you have any questions or concerns about your energy consumption.</p>
`;
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
      html: html,
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