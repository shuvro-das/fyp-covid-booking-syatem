import express from "express";
import expressAsyncHandler from "express-async-handler";
import Booking from "../models/BookingModel.js";
import data from "../data.js";
import mongoose from "mongoose";
import path from "path";

import dotenv from "dotenv";

import { pdfTemplate } from "../documents/pdfGenerator.js";

import { isAuth, smessend } from "../util.js";
import pdf from "html-pdf";
// import sendSms from "../Twilio.js";

import twilioclient from "twilio";
dotenv.config();
const ObjectID = mongoose.Types._ObjectId;

// const accountSid = "AC0450a08189e0dacde502ee430d298ddb";
// const authToken = "e2800378bf0e02b4b8566661477f06fb";
dotenv.config();

const Bookingrouter = express.Router();
const __dirname = path.resolve();

Bookingrouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await User.remove({});
    const createdBookings = await Booking.insertMany(data.bookings);
    res.send({ createdBookings });
  })
);
Bookingrouter.get(
  "/bookinglist",

  expressAsyncHandler(async (req, res) => {
    const users = await Booking.find({});
    res.send(users);
  })
);

Bookingrouter.post("/sendmsg", async (req, res) => {
  const newBooking = await new Booking({
    name: req.body.name,
    mobilenumber: req.body.mobilenumber,
    birthdate: req.body.birthdate,
    age: req.body.age,
    photoidproof: req.body.photoidproof,
    idproofnumber: req.body.idproofnumber,
    sideinfo: req.body.sideinfo,
    hoslocation: req.body.hoslocation,
    user: req.body.user,
    dateinfo: req.body.dateinfo,
    timeinfo: req.body.timeinfo,
  });

  const createdBookings = await newBooking.save();

  // res.header("Content-Type", "application/json");
  // const accountSid = "AC0450a08189e0dacde502ee430d298ddb";
  // const authToken = "e2800378bf0e02b4b8566661477f06fb";
  // const client = twilioclient(accountSid, authToken);

  // client.messages
  //   .create({
  //     body: `Dear,Sir/Mam ${req.body.name}, age: ${req.body.age},
  //   You Have Successfully Registered for the COVID19 Vaccination.
  //    Your booking id is  ${createdBookings.id} . Please come with your ${req.body.photoidproof}. at ${req.body.timeinfo} on ${req.body.dateinfo}`,
  //     from: "+19724357396",
  //     to: req.body.mobilenumber,
  //   })
  //   .then(() => {
  //     res.send(JSON.stringify({ success: true }));
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.send(JSON.stringify({ success: false }));
  //   });
  pdf.create(pdfTemplate(createdBookings, {})).toFile("result.pdf", (err) => {
    if (err) {
      return res.send(Promise.reject());
    }
    return res.send(Promise.resolve());
  });
  // if (createdBookings) {
  //   res.send(createdBookings);

  // } else {
  //   res.status(404).send({ message: "Booking Failed" });
  // }
});

Bookingrouter.get(
  "/fetch-pdf",
  expressAsyncHandler((req, res) => {
    res.sendFile("result.pdf", { root: __dirname });
    console.log(__dirname);
  })
);

Bookingrouter.get(
  `/sendmsg/:id`,
  // isAuth,
  expressAsyncHandler(async (req, res) => {
    const userbooking = await Booking.findById(req.params.id);
    if (userbooking) {
      res.send(userbooking);
    } else {
      res.status(404).send({ message: "Booking Not Found" });
    }
  })
);

// Bookingrouter.get("/sendmsg/:id", (req, res) => {
//   // if (!ObjectID.isValid(req.params.id)) {
//   //   return res.status(400).send("No Record with Given id:" + req.params.id);
//   // } else {
//   //   const bookingindividual = Booking.findById(req.params.id);
//   //   if (bookingindividual) {
//   //     res.send(bookingindividual);
//   //   } else {
//   //     res.status(404).send({ message: "Booking Not Found" });
//   //   }
//   // }
//   // const bookingindividual = Booking.findById(req.params.id);
//   // if (bookingindividual) {
//   //   res.send(bookingindividual);
//   // } else {
//   //   res.status(404).send({ message: "Booking Not Found" });
//   // }
// });

// Bookingrouter.get(
//   "/sendmsg/:id",

//   expressAsyncHandler(async (req, res) => {
//     const bookinginfo = await Booking.find(req.params.id);
//     if (bookinginfo) {
//       res.send(bookinginfo, bookinginfo._ObjectId);
//     } else {
//       res.status(404).send({ message: "User Not Found" });
//     }
//   })
// );
// Bookingrouter.get("/sendmsg/:id", function (req, res) {
//   Booking.find({ _id: req.params.id }, function (err, docs) {
//     if (err) res.json(err);
//     else res.render("show", { user: docs[0] });
//   });
// });
// Bookingrouter.get('/sendmsg/:id', (req,res) => {
//   Booking.find({_id})
// })

// route to get all bookings for a user at a particuler date
// Bookingrouter.get(
//   "/getvaccinedetails",
//   expressAsyncHandler(async (req, res) => {
//     const bookings = await Booking.find({});

//     // get maximum price

//     const current_date = req.body.dateinfo;
//     const current_mobilenumber = req.body.mobilenumber;

//     //traverse the sesssion array and retrieve the sessions which are below the max_price

//     var filtered_bookings = [];

//     for (var i = 0; i < bookings.length; i++) {
//       if (
//         bookings[i].dateinfo == current_date &&
//         bookings[i].mobilenumber == current_mobilenumber
//       ) {
//         filtered_bookings.push(bookings[i]);
//       }
//     }

//     if (filtered_bookings) {
//       res.send(filtered_bookings);
//     } else {
//       res.status(404).send({ message: "Booking Not Found" });
//     }
//   })
// );

export default Bookingrouter;
