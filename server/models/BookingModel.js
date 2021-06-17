import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mobilenumber: { type: Number, required: true, unique: true },
    birthdate: { type: String, required: true },
    age: { type: Number, required: true },
    photoidproof: { type: String, required: true },
    idproofnumber: { type: String, required: true },
    user: { type: String, required: true },
    sideinfo: { type: String },
    hoslocation: { type: String, required: true },
    dateinfo: { type: Date, required: true },
    timeinfo: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
