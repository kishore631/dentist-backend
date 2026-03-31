import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  service: String,
  date: String,
}, { timestamps: true });

export default mongoose.model("Appointment", appointmentSchema);