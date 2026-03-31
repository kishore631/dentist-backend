import express from "express";
import Appointment from "../models/Appointment.js";

const router = express.Router();

// ✅ POST (already exists)
router.post("/", async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ message: "Appointment booked" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ ADD THIS GET ROUTE
router.get("/", async (req, res) => {
  try {
    const data = await Appointment.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;