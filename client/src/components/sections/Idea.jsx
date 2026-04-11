import { useState, useEffect, useRef } from "react";

const MARQUEE_ITEMS = [
  "User-Friendly",
  "Professional Layouts",
  "Website Design",
  "Interactive UI",
  "Fast & Responsive",
  "User-Friendly",
  "Professional Layouts",
  "Website Design",
  "Interactive UI",
  "Fast & Responsive",
];

function MarqueeBanner() {
  return (
    <div
      className="w-full overflow-hidden py-4"
      style={{ background: "#0f1b4c" }}
    >
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 18s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-track">
        {/* Doubled for seamless loop */}
        {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 px-6 whitespace-nowrap"
          >
            <span className="text-white font-semibold text-sm tracking-wide">
              {item}
            </span>
            <span className="text-white/40 text-lg">|</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Idea() {
  const [idea, setIdea] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = async () => {
    if (!idea.trim()) return;
    setLoading(true);

    // simulate sending — replace with real API call later
    await new Promise((r) => setTimeout(r, 1200));

    setLoading(false);
    setSubmitted(true);
    setIdea("");

    // reset after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <section id="idea" className="pt-24 pb-0 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-0">
            <span className="text-navy">Have an </span>
            <span className="text-gray-300">Awsome </span>
            <span className="text-navy">Project</span>
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mt-1">
            <span className="text-navy">Idea? </span>
            <span className="text-gray-300">Let's Discuss</span>
          </h2>
        </div>

        {/* Input row */}
        <div className="flex justify-center mb-8">
          <div
            className="flex items-center gap-3 bg-white rounded-full px-5 py-3 w-full max-w-lg"
            style={{
              border: "1px solid rgba(15,27,76,0.12)",
              boxShadow: "0 4px 24px rgba(15,27,76,0.08)",
            }}
          >
            {/* Power icon */}
            <svg
              className="w-5 h-5 text-gray-300 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 3v4m0 0a5 5 0 100 10 5 5 0 000-10z"
              />
            </svg>

            {/* Input */}
            <input
              ref={inputRef}
              type="text"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Discuss Idea"
              className="flex-1 text-sm text-gray-600 outline-none bg-transparent placeholder-gray-300"
            />

            {/* Send button */}
            <button
              onClick={handleSubmit}
              disabled={loading || !idea.trim()}
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
              style={{
                background: idea.trim() ? "#0f1b4c" : "#e5e7eb",
              }}
            >
              {loading ? (
                <svg
                  className="w-4 h-4 animate-spin text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
              ) : submitted ? (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 5l7 7-7 7M5 12h15"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Success message */}
        {submitted && (
          <p className="text-center text-sm text-green-500 mb-6 transition-all duration-300">
            ✓ Your idea has been sent! I'll get back to you soon.
          </p>
        )}

        {/* Stats row */}
        <div className="flex justify-center items-center gap-8 mb-16">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-lg">★</span>
            <span className="text-sm font-semibold text-navy">4.9/5</span>
            <span className="text-sm text-gray-400">Average Ratings</span>
          </div>
          <div className="w-px h-4 bg-gray-200" />
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-lg">🏅</span>
            <span className="text-sm font-semibold text-navy">4</span>
            <span className="text-sm text-gray-400">Satisfying Clients</span>
          </div>
        </div>
      </div>

      {/* Full width marquee banner — no max-w constraint */}
      <MarqueeBanner />

      {/* Divider with diamond */}
      <div className="relative flex items-center justify-center mt-0">
        <div className="w-full h-px bg-gray-200" />
      </div>
    </section>
  );
}
