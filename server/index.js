import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import chatRoute from "./routes/chat.js";
import contactRoute from "./routes/contact.js";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://your-portfolio.vercel.app", // ← add after Vercel deploy
      /\.vercel\.app$/, // ← allows all vercel preview URLs
    ],
  }),
);
app.use(express.json());

// routes
app.use("/api/chat", chatRoute);
app.use("/api/contact", contactRoute);

// mongodb
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
