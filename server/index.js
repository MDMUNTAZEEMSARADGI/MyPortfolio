import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import chatRoute from "./routes/chat.js";
import contactRoute from "./routes/contact.js";


const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://md-muntazeem-saradgi-portfolio.vercel.app", // ← your real URL
  ],
}));app.use(express.json());

// routes
app.use("/api/chat", chatRoute);
app.use("/api/contact", contactRoute);

// testing email
app.get("/test-email", async (req, res) => {
  const nodemailer = await import("nodemailer");
  
  const transporter = nodemailer.default.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "Test email from portfolio",
      text: "If you see this — email is working! ✓",
    });
    res.json({ success: true, message: "Email sent! Check your inbox" });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

// mongodb
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
     