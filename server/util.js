import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

import twilioclient from "twilio";

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    `${process.env.JWT_SECRET}`,
    {
      expiresIn: "30d",
    }
  );
};

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.slice(7, authorization.length); // bearer xxxxxx
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: "Invalid Token" });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: "No Token" });
  }
};

export const smessend = (req) => {
  const accountSid = "AC0450a08189e0dacde502ee430d298ddb";
  const authToken = "e2800378bf0e02b4b8566661477f06fb";

  const client = new twilioclient(accountSid, authToken);
  client.messages
    .create({
      body: "You succesfully registered for the vaccination. ",
      from: "+19724357396",
      to: "+917044616986",
    })
    .then((message) => console.log(message.sid));
};

// export const isAdmin = (req, res, next) => {
//   if (req.user && req.user.isAdmin) {
//     next();
//   } else {
//     res.status(401).send({ message: "Invalid Admin Token " });
//   }
// };

// export const payOrderEmailTemplate = (booking) => {
//   return `<h1>Thanks for Vaccine Registraion.</h1>
//   <p>
//   Hi ${order.user.name},</p>
//   <p>We have finished processing your order.</p>
//   <h2>[Order ${order._id}] (${order.createdAt.toString().substring(0, 10)})</h2>
//   <table>
//   <thead>
//   <tr>
//   <td><strong>Product</strong></td>
//   <td><strong>Quantity</strong></td>
//   <td><strong align="right">Price</strong></td>
//   </thead>
//   <tbody>
//   ${order.orderItems
//     .map(
//       (item) => `
//     <tr>
//     <td>${item.name}</td>
//     <td align="center">${item.qty}</td>
//     <td align="right"> ₹${item.price.toFixed(2)}</td>
//     </tr>
//   `
//     )
//     .join("\n")}
//   </tbody>
//   <tfoot>
//   <tr>
//   <td colspan="2">Items Price:</td>
//   <td align="right"> ₹${order.itemsPrice.toFixed(2)}</td>
//   </tr>
//   <tr>
//   <td colspan="2">Tax Price:</td>
//   <td align="right"> ₹${order.taxPrice.toFixed(2)}</td>
//   </tr>
//   <tr>
//   <td colspan="2">Shipping Price:</td>
//   <td align="right"> ₹${order.shippingPrice.toFixed(2)}</td>
//   </tr>
//   <tr>
//   <td colspan="2"><strong>Total Price:</strong></td>
//   <td align="right"><strong> ₹${order.totalPrice.toFixed(2)}</strong></td>
//   </tr>
//   <tr>
//   <td colspan="2">Payment Method:</td>
//   <td align="right">${order.paymentMethod}</td>
//   </tr>
//   </table>
//   <h2>Shipping address</h2>
//   <p>
//   ${order.shippingAddress.fullName},<br/>
//   ${order.shippingAddress.address},<br/>
//   ${order.shippingAddress.city},<br/>
//   ${order.shippingAddress.country},<br/>
//   ${order.shippingAddress.postalCode}<br/>
//   </p>
//   <hr/>
//   <p>
//   Thanks for shopping with us.
//   </p>
//   `;
// };
