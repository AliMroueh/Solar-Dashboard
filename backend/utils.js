import jwt from 'jsonwebtoken';
import pkg from 'passport-jwt';
import mg from 'mailgun-js';
import User from './models/userModel.js';
const { Strategy:JwtStrategy, ExtractJwt } = pkg;

export const generateToken = user => {
    // first parameter is the user object
    // second parameter is json web token secret a key that encrypt data and generate the token
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || 'somethingsecret',
    {
        expiresIn: '25d',
    }
    );
}

export const refreshToken = user => {
    return jwt.sign(
   { 
       _id: user._id,
       name: user.name,
       email: user.email,
       isAdmin: user.isAdmin, 
   },
   process.env.REFRESH_TOKEN_SECRET || 'secret',
   { 
       expiresIn: '30d'
   }
)}

// isAuth is a middleware to authenicate user
// export const isAuth = (req, res, next) => {
//     const authorization = req.headers.authorization;
//     console.log(`authorization ${authorization}`)
//     if(authorization){
//         const token = authorization.slice(7, authorization.length); // Bearer XXXXXX. when we make slice from 7 to end it means to take the token after Bearer
//         // jwt is to decrypt the token
//         jwt.verify(
//             token,
//             process.env.JWT_SECRET || 'somethingsecret',
//             // callback function.  decode is contain the data inside token 
//             (err, decode) => {
//                 if(err) {
//                     res.status(401).send({message: 'Invalid Token'});
//                 } else {
//                     // decode is the information of the user when sign in up
//                     req.user = decode;
//                     next();
//                 }
//             }
//         );
//     }else{
//         res.status(401).send({message: 'No Token'});
//     }
// }

// export const isAdmin = (req, res, next) => {
//     if(req.user && req.user.isAdmin){
//         next();
//     }else{
//         res.status(401).send({message: 'Invalid Admin Token'});
//     }
// };



export const applyPassportStrategy = passport => {
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET || 'somethingsecret';

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    // jwt_payload is the data that we create when create the token
    User.findOne({_id: jwt_payload._id}, function(err, user) {
        if (err) {
            console.log(err)
            return done(err, false);
            // return done.send(status)
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));}

export const isAdmin =() => (req,res,next) => {
    if(req.user.isAdmin){
        next()
    }else{
        return res.status(401).json({message: "no access"})
    }
}

export const mailgun = () =>
mg({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMIAN,
});

export const payOrderEmailTemplate = (order) => {
return `<h1>Thanks for shopping with us</h1>
<p>
Hi ${order.user.name},</p>
<p>We have finished processing your order.</p>
<h2>[Order ${order._id}] (${order.createdAt.toString().substring(0, 10)})</h2>
<table>
<thead>
<tr>
<td><strong>Product</strong></td>
<td><strong>Quantity</strong></td>
<td><strong align="right">Price</strong></td>
</thead>
<tbody>
${order.orderItems
  .map(
    (item) => `
  <tr>
  <td>${item.name}</td>
  <td align="center">${item.qty}</td>
  <td align="right"> $${item.price.toFixed(2)}</td>
  </tr>
`
  )
  .join('\n')}
</tbody>
<tfoot>
<tr>
<td colspan="2">Items Price:</td>
<td align="right"> $${order.itemsPrice.toFixed(2)}</td>
</tr>
<tr>
<td colspan="2">Tax Price:</td>
<td align="right"> $${order.taxPrice.toFixed(2)}</td>
</tr>
<tr>
<td colspan="2">Shipping Price:</td>
<td align="right"> $${order.shippingPrice.toFixed(2)}</td>
</tr>
<tr>
<td colspan="2"><strong>Total Price:</strong></td>
<td align="right"><strong> $${order.totalPrice.toFixed(2)}</strong></td>
</tr>
<tr>
<td colspan="2">Payment Method:</td>
<td align="right">${order.paymentMethod}</td>
</tr>
</table>
<h2>Shipping address</h2>
<p>
${order.shippingAddress.fullName},<br/>
${order.shippingAddress.address},<br/>
${order.shippingAddress.city},<br/>
${order.shippingAddress.country},<br/>
${order.shippingAddress.postalCode}<br/>
</p>
<hr/>
<p>
Thanks for shopping with us.
</p>
`;
};

try{
    mailgun()
  .messages()
  .send(
    {
      from: 'Amazona <amazona@mg.yourdomain.com>',
      to: `${order.user.name} <${order.user.email}>`,
      subject: `New order ${order._id}`,
      html: payOrderEmailTemplate(order),
    },
    (error, body) => {
      if (error) {
        console.log(error);
      } else {
        console.log(body);
      }
    }
  );
  }catch(err){
    console.log(err)
  }