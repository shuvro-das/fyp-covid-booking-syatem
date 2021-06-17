import dotenv from "dotenv";
import twilioclient from "twilio";
dotenv.config();

const accountSid = "AC0450a08189e0dacde502ee430d298ddb";
const authToken = "e2800378bf0e02b4b8566661477f06fb";

const sendSms = (phone, message) => {
  const client = twilioclient(accountSid, authToken);
  client.messages
    .create({
      body: "You succesfully registered for the vaccination. ",
      from: "+19724357396",
      to: req.body.mobilenumber,
    })
    .then((message) => console.log(message.sid));
};

export default sendSms;
