import express from "express";
import mongoose from "mongoose";

const router = express.Router();

// Contact schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const contact = new Contact({ name, email, subject, message });
    await contact.save();
    res.json({ success: true, message: "Message saved successfully" });
  } catch (err) {
    console.error("Contact save error:", err);
    res.status(500).json({ error: "Failed to save message" });
  }
});

export default router;
