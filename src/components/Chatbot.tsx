import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import emailjs from "@emailjs/browser";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "🍅 Hey! I'm TOMATO 😊 What's your name?" },
  ]);

  const [input, setInput] = useState("");
  const [stage, setStage] = useState<"name" | "email" | "chat">("name");
  const [user, setUser] = useState({ name: "", email: "" });

  const sendBot = (text: string) =>
    setMessages((prev) => [...prev, { from: "bot", text }]);

  // ✅ FIXED: Pass name & email directly to avoid async state issue
  const sendEmail = async (name: string, email: string) => {
    try {
      await emailjs.send(
        "service_1df6hl5",  // Service ID
        "template_5ggclth", // Template ID
        {
          name: name,        // Matches {{name}} in template
          email: email,      // Matches {{email}} in template
        },
        "QFS6G3OtDIiHj86BA"  // Public Key
      );

      sendBot(`📩 Email sent successfully to ${email}!`);
      sendBot("Now tell me — what are you craving today? 😋");
    } catch (error) {
      console.error("EMAILJS ERROR:", error);
      sendBot("⚠️ Couldn't send email — but let's continue chatting!");
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const msg = input.trim();

    setMessages((prev) => [...prev, { from: "user", text: msg }]);
    setInput("");

    if (stage === "name") {
      setUser((u) => ({ ...u, name: msg }));
      setStage("email");
      sendBot(`Nice to meet you, ${msg}! 😊 What's your email?`);
      return;
    }

    if (stage === "email") {
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(msg);
      if (!valid) {
        sendBot("✉️ That doesn't look like a valid email. Try again?");
        return;
      }

      setUser((u) => ({ ...u, email: msg }));
      setStage("chat");

      // ✅ FIXED: Use msg directly (correct email), not stale state
      await sendEmail(user.name, msg);
      return;
    }

    // AI Chat Stage
    try {
      const res = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Reply short bullet points. No * formatting. User: ${msg}`,
      });

      sendBot(res.text?.replace(/\*/g, "") || "😄 Say that again?");
    } catch {
      sendBot("😅 Kitchen is busy — try again later!");
    }
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 w-[380px] h-[520px] bg-background border border-border rounded-2xl shadow-2xl p-4 flex flex-col z-50">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="font-bold text-lg">🍅 TOMATO Assistant</h3>
            <button onClick={() => setOpen(false)}><X size={22} /></button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-3 mt-3 pr-1">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-lg text-sm max-w-[85%] break-words ${
                  m.from === "user"
                    ? "bg-primary text-primary-foreground ml-auto"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={
                stage === "name"
                  ? "Your Name..."
                  : stage === "email"
                  ? "Your Email..."
                  : "Ask anything 🍕"
              }
              className="flex-1 px-3 py-2 border border-input rounded-lg bg-muted text-foreground"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 transition flex items-center justify-center"
      >
        {open ? <X size={30} /> : <MessageCircle size={30} />}
      </button>
    </>
  );
}
