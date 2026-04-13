import { useState } from "react";
import {
  FiMail, FiPhone, FiGithub, FiInstagram,
  FiTwitter, FiLink,
} from "react-icons/fi";
// import { SiFiverr } from "react-icons/si";

const SOCIAL_LINKS = [
  { icon: FiGithub,    href: "https://github.com/MDMUNTAZEEMSARADGI",    label: "GitHub" },
  { icon: FiTwitter,   href: "https://twitter.com/md_muntazeem",   label: "Twitter" },
  { icon: FiInstagram, href: "https://instagram.com/muntazeem._s_", label: "Instagram" },
//   { icon: FiLink,      href: "https://yourwebsite.com",            label: "Website" },
//   { icon: SiFiverr,    href: "https://fiverr.com/yourusername",    label: "Fiverr" },
];

const INPUT_CLASS =
  "w-full bg-transparent border border-gray-200 rounded-2xl px-5 py-3.5 text-sm text-gray-600 placeholder-gray-300 outline-none focus:border-navy transition-colors duration-200";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading]   = useState(false);
  const [success, setSuccess]   = useState(false);
  const [error, setError]       = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const validate = () => {
    if (!form.name.trim())    return "Name is required.";
    if (!form.email.trim())   return "Email is required.";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Enter a valid email.";
    if (!form.subject.trim()) return "Subject is required.";
    if (!form.message.trim()) return "Message is required.";
    return "";
  };

  const handleSubmit = async () => {
    const err = validate();
    if (err) { setError(err); return; }

    setLoading(true);
    setError("");

    try {
      // ── replace this URL with your real Express endpoint later ──
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Server error");

      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 4000);
    } catch (e) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Diamond divider top */}
        <div className="relative flex items-center justify-center mb-20">
          <div className="w-full h-px bg-gray-200" />
          <div
            className="absolute w-3 h-3 bg-navy rotate-45"
            style={{ boxShadow: "0 0 0 3px white, 0 0 0 4px #e5e7eb" }}
          />
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* ── Left ── */}
          <div className="flex flex-col gap-8">

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">
                Contact Us
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                We are committed to processing the information in order to
                contact you and talk about your project.
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                <FiMail className="w-5 h-5 text-white" />
              </div>
              <a
                href="mailto:mdmuntazeemsaradgi@gmail.com"
                className="text-sm text-gray-600 hover:text-navy transition-colors duration-200"
              >
                mdmuntazeemsaradgi@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                <FiPhone className="w-5 h-5 text-white" />
              </div>
              <a
                href="tel:+91 8792198726"
                className="text-sm text-gray-600 hover:text-navy transition-colors duration-200"
              >
                +91 8792198726
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 flex-wrap">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>

          </div>

          {/* ── Right — Form ── */}
          <div className="flex flex-col gap-4">

            {/* Name */}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className={INPUT_CLASS}
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className={INPUT_CLASS}
            />

            {/* Subject */}
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className={INPUT_CLASS}
            />

            {/* Message */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={5}
              className={INPUT_CLASS + " resize-none"}
            />

            {/* Error */}
            {error && (
              <p className="text-red-400 text-xs px-1">{error}</p>
            )}

            {/* Success */}
            {success && (
              <p className="text-green-500 text-xs px-1">
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-4 rounded-2xl text-sm font-medium transition-all duration-200 mt-1"
              style={{
                background: loading ? "#e5e7eb" : "#e5e7eb",
                color: loading ? "#9ca3af" : "#374151",
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12" cy="12" r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}