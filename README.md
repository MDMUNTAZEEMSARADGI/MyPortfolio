# 🚀 Md Muntazeem Saradgi — Portfolio

A modern, responsive, single-page portfolio website built with the MERN stack featuring an AI-powered chatbot assistant.

---

## 🌐 Live Demo

[Coming Soon](#) ← update after deployment

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React.js (Vite)
- 🎨 Tailwind CSS v4
- 🔷 JavaScript
- 🎯 React Icons

### Backend
- 🟢 Node.js
- ⚡ Express.js
- 🍃 MongoDB Atlas + Mongoose
- 🤖 Groq AI (Llama 3.3)

---

## 📁 Folder Structure

Portfolio/
├── client/                        # Frontend
│   ├── public/
│   │   └── images/                # Project screenshots
│   ├── src/
│   │   ├── assets/
│   │   │   └── images/
│   │   │       └── profile.jpg
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   │   └── Navbar.jsx
│   │   │   ├── sections/
│   │   │   │   ├── About.jsx
│   │   │   │   ├── WhyHireMe.jsx
│   │   │   │   ├── Skills.jsx
│   │   │   │   ├── Services.jsx
│   │   │   │   ├── Projects.jsx
│   │   │   │   ├── Experience.jsx
│   │   │   │   ├── Idea.jsx
│   │   │   │   ├── Contact.jsx
│   │   │   │   └── Footer.jsx
│   │   │   └── ui/
│   │   │       └── ChatBot.jsx
│   │   ├── constants/
│   │   │   └── index.js
│   │   ├── hooks/
│   │   │   └── useActiveSection.js
│   │   ├── styles/
│   │   │   └── index.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── server/                        # Backend
│   ├── routes/
│   │   ├── chat.js                # Groq AI chatbot
│   │   └── contact.js             # Contact form → MongoDB
│   ├── .env                       # Secret keys (never pushed)
│   ├── .gitignore
│   ├── index.js
│   └── package.json
│
└── README.md


---

## ✨ Features

- 🎯 Smooth scroll single-page navigation
- 🔵 Active section highlight in navbar
- 🌐 Grid background pattern
- 🌀 Skills orbit animation (3 rings)
- 💼 Projects showcase with filter tabs
- 📅 Work experience timeline
- 💡 Idea discussion input
- 🎪 Infinite marquee banner
- 📬 Contact form → saved to MongoDB
- 🤖 AI chatbot powered by Groq (Llama 3.3)
- 📱 Fully responsive on all devices

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Groq API key (free at console.groq.com)
- Git

### Clone the repo

```bash
git clone https://github.com/MDMUNTAZEEMSARADGI/MyPortfolio.git
cd portfolio
```

### Install dependencies

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

### Environment Variables

Create `server/.env`:

```env
PORT=5000
MONGODB_URI=your_mongodb_atlas_uri
GROQ_API_KEY=your_groq_api_key
```

### Run locally

```bash
# Terminal 1 — Backend
cd server
npm run dev

# Terminal 2 — Frontend
cd client
npm run dev
```

Frontend → [http://localhost:5173](http://localhost:5173)
Backend  → [http://localhost:5000](http://localhost:5000)

---

## 📸 Sections

| Section | Description |
|---|---|
| About | Hero with profile image and roles |
| Why Hire Me | Skills summary with photo |
| Skills | 3-ring orbit animation of tech icons |
| Services | 6 service cards with hover effects |
| Projects | Filterable project grid with GitHub links |
| Experience | Vertical timeline of work history |
| Idea | Project discussion CTA + marquee banner |
| Contact | Form saved to MongoDB |
| Footer | Links, nav, social icons |
| ChatBot | AI assistant powered by Groq |

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/chat` | Send message to AI chatbot |
| POST | `/api/contact` | Submit contact form |

---

## 📬 Contact

- 📧 Email: your@email.com
- 🐙 GitHub: [github.com/MDMUNTAZEEMSARADGI](https://github.com/MDMUNTAZEEMSARADGI)

---

## 🚢 Deployment

| Part | Platform |
|---|---|
| Frontend | Vercel |
| Backend | Render |
| Database | MongoDB Atlas |

---

## 📄 License

MIT License — feel free to use this as inspiration for your own portfolio.

---

⭐ If you like this project give it a star on GitHub!