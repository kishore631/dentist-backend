import express from "express";
import Appointment from "../models/Appointment.js";

const router = express.Router();

// CREATE APPOINTMENT
router.post("/", async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();

    res.status(201).json({
      message: "Appointment booked successfully",
      data: newAppointment
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;