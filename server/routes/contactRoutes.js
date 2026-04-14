import express from "express";
import ContactMessage from "../models/ContactMessage.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, purpose } = req.body;

    if (!firstName || !lastName || !email || !phone || !purpose) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const newMessage = await ContactMessage.create({
      firstName,
      lastName,
      email,
      phone,
      purpose
    });

    res.status(201).json({
      message: "Contact form submitted successfully",
      data: newMessage
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to submit contact form",
      error: error.message
    });
  }
});

export default router;