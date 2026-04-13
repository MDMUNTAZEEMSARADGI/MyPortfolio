import express from "express";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

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

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // 1 — Save to MongoDB
    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    // 2 — Send email notification to YOU
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `📬 New Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px;">
          
          <div style="background: #0f1b4c; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
            <h2 style="color: white; margin: 0; font-size: 20px;">
              📬 New Message from Your Portfolio
            </h2>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; background: #f9fafb; border-radius: 8px; margin-bottom: 8px;">
                <p style="margin: 0; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px;">Name</p>
                <p style="margin: 4px 0 0; font-size: 16px; color: #0f1b4c; font-weight: 600;">${name}</p>
              </td>
            </tr>
            <tr><td style="padding: 4px;"></td></tr>
            <tr>
              <td style="padding: 12px; background: #f9fafb; border-radius: 8px;">
                <p style="margin: 0; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                <p style="margin: 4px 0 0; font-size: 16px; color: #0f1b4c; font-weight: 600;">
                  <a href="mailto:${email}" style="color: #0f1b4c;">${email}</a>
                </p>
              </td>
            </tr>
            <tr><td style="padding: 4px;"></td></tr>
            <tr>
              <td style="padding: 12px; background: #f9fafb; border-radius: 8px;">
                <p style="margin: 0; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px;">Subject</p>
                <p style="margin: 4px 0 0; font-size: 16px; color: #0f1b4c; font-weight: 600;">${subject}</p>
              </td>
            </tr>
            <tr><td style="padding: 4px;"></td></tr>
            <tr>
              <td style="padding: 12px; background: #f9fafb; border-radius: 8px;">
                <p style="margin: 0; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                <p style="margin: 4px 0 0; font-size: 16px; color: #374151; line-height: 1.6;">${message}</p>
              </td>
            </tr>
          </table>

          <div style="margin-top: 24px; padding: 16px; background: #f0f4ff; border-radius: 8px; border-left: 4px solid #0f1b4c;">
            <p style="margin: 0; font-size: 13px; color: #6b7280;">
              💡 Reply directly to this email to respond to ${name}
            </p>
          </div>

          <div style="margin-top: 20px; text-align: center;">
            <a 
              href="mailto:${email}?subject=Re: ${subject}"
              style="background: #0f1b4c; color: white; padding: 12px 24px; border-radius: 24px; text-decoration: none; font-size: 14px; font-weight: 600;"
            >
              Reply to ${name} →
            </a>
          </div>

          <p style="margin-top: 24px; text-align: center; font-size: 12px; color: #9ca3af;">
            Sent from your portfolio contact form • Md Muntazeem Saradgi
          </p>

        </div>
      `,
    });

    // 3 — Send confirmation email to the PERSON who contacted you
    await transporter.sendMail({
      from: `"Md Muntazeem Saradgi" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `✓ Got your message, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px;">
          
          <div style="background: #0f1b4c; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
            <h2 style="color: white; margin: 0; font-size: 20px;">
              Thanks for reaching out! 👋
            </h2>
          </div>

          <p style="color: #374151; font-size: 15px; line-height: 1.6;">
            Hi <strong>${name}</strong>,
          </p>
          <p style="color: #374151; font-size: 15px; line-height: 1.6;">
            Thanks for contacting me through my portfolio. I've received your message and will get back to you within <strong>24 hours</strong>.
          </p>

          <div style="background: #f9fafb; padding: 16px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0f1b4c;">
            <p style="margin: 0; font-size: 13px; color: #6b7280;">Your message:</p>
            <p style="margin: 8px 0 0; font-size: 14px; color: #374151; line-height: 1.6;">"${message}"</p>
          </div>

          <p style="color: #374151; font-size: 15px; line-height: 1.6;">
            Best regards,<br/>
            <strong style="color: #0f1b4c;">Md Muntazeem Saradgi</strong><br/>
            <span style="color: #6b7280; font-size: 13px;">Frontend Developer & Agentic AI Developer</span>
          </p>

          <p style="margin-top: 24px; text-align: center; font-size: 12px; color: #9ca3af;">
            This is an automated confirmation from muntazeem's portfolio
          </p>

        </div>
      `,
    });

    res.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (err) {
    console.error("Contact error:", err);
    res.status(500).json({ error: "Failed to send message" });
  }
});

export default router;
