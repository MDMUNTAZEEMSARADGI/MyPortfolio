import { useState, useRef, useEffect } from "react";
import { FiX, FiSend } from "react-icons/fi";
import { BsRobot } from "react-icons/bs";

const INITIAL_MESSAGE = {
  role: "assistant",
  content: "Hi! I'm Muntazeem's AI assistant. How can I help you today?",
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  // auto scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input.trim() };

    // add user message to UI
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      // filter out initial greeting before sending to API
      // API only needs role: user | assistant messages
      const apiMessages = updatedMessages
        .filter((m) => m.role === "user" || m.role === "assistant")
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await res.json();

      if (data.reply) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
      } else {
        throw new Error("No reply");
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I'm having trouble connecting. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-80 md:w-96 flex flex-col rounded-2xl overflow-hidden"
          style={{
            boxShadow: "0 20px 60px rgba(15,27,76,0.2)",
            border: "1px solid rgba(15,27,76,0.1)",
            height: "480px",
          }}
        >
          {/* Header */}
          <div className="bg-navy px-5 py-4 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                <BsRobot className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  Md Muntazeem Saradgi
                </p>
                <p className="text-white/60 text-xs">
                  Always online • Ready to help
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white transition-colors duration-200"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-white">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className="max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
                  style={{
                    background: msg.role === "user" ? "#0f1b4c" : "#f3f4f6",
                    color: msg.role === "user" ? "white" : "#374151",
                    borderBottomRightRadius: msg.role === "user" ? 4 : 16,
                    borderBottomLeftRadius: msg.role === "user" ? 16 : 4,
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Loading dots */}
            {loading && (
              <div className="flex justify-start">
                <div
                  className="px-4 py-3 rounded-2xl bg-gray-100"
                  style={{ borderBottomLeftRadius: 4 }}
                >
                  <div className="flex gap-1 items-center">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 bg-gray-400 rounded-full"
                        style={{
                          animation: `bounce 1s ease-in-out ${i * 0.15}s infinite`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            className="px-4 py-3 bg-white flex items-center gap-3 flex-shrink-0"
            style={{ borderTop: "1px solid #f3f4f6" }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about Muntazeem..."
              className="flex-1 text-sm text-gray-600 outline-none placeholder-gray-300 bg-transparent"
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
              style={{
                background: input.trim() ? "#0f1b4c" : "#e5e7eb",
              }}
            >
              <FiSend
                className="w-4 h-4"
                style={{ color: input.trim() ? "white" : "#9ca3af" }}
              />
            </button>
          </div>
        </div>
      )}

      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-navy rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-all duration-200"
        style={{
          boxShadow: "0 8px 30px rgba(15,27,76,0.3)",
        }}
      >
        {open ? (
          <FiX className="w-6 h-6 text-white" />
        ) : (
          <BsRobot className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Bounce animation for loading dots */}
      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0);    opacity: 0.4; }
          50%       { transform: translateY(-4px); opacity: 1;   }
        }
      `}</style>
    </>
  );
}
