import express from "express";
import Groq from "groq-sdk";

const router = express.Router();

const SYSTEM_PROMPT = `You are a helpful AI assistant for Md Muntazeem Saradgi's portfolio website.
Your job is to answer questions about Md Muntazeem Saradgi professionally and helpfully.

Here is everything you know about him:

NAME: Md Muntazeem Saradgi
ROLE: Frontend Developer & Agentic AI Developer

SKILLS: HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Vue.js,
Nuxt.js, Tailwind CSS, Bootstrap, Node.js, MongoDB, MySQL, Firebase,
REST APIs, Docker, Python, Figma, GitHub, n8n, Agentic AI

EXPERIENCE:
- Autoboli (Dec 2025 - Present): Frontend Developer using Vue.js
- Aykays (June 2025 - Aug 2025): Frontend Developer using React.js & Next.js
- Skytech (Jan 2025 - June 2025): Frontend Developer using React.js

SERVICES:
- Frontend Mastery (HTML, CSS, JS, TS, React, Next.js)
- UI/UX & Design (Figma, Tailwind, Bootstrap)
- Mobile Development (React Native, PWA, Responsive)
- Performance & SEO (95+ Lighthouse, SSR/SSG, Core Web Vitals)
- Backend & Database (MySQL, MongoDB, Firebase, REST APIs)
- Deployment & Tools (Vercel, Netlify, GitHub, Docker)

CONTACT:
- Email: your@email.com
- Phone: +92 3400292040
- Available for freelance and full-time opportunities

RULES:
- Keep answers short, friendly and professional
- Answer in 2-3 sentences max
- If asked something unrelated to Muntazeem or web development
  politely say you can only help with questions about Muntazeem
- Never make up information not listed above`;

router.post("/", async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Messages array is required" });
  }

  try {
    // ✅ initialize INSIDE the handler so dotenv is already loaded
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      max_tokens: 500,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages,
      ],
    });

    const reply = response.choices[0].message.content;
    res.json({ reply });

  } catch (err) {
    console.error("Groq API error:", err);
    res.status(500).json({ error: "Failed to get response" });
  }
});

export default router;