import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "🍅 Hey! I’m TOMATO. Ask me about food, cravings, offers, or why TOMATO > Zomato 😎" },
  ]);
  const [input, setInput] = useState("");

  const formatQuery = (msg: string) => `
Respond in short, fun bullet points. Tone: friendly, student vibe.

User: ${msg}
`;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setMessages((prev) => [...prev, { from: "user", text: userMessage }]);
    setInput("");

    try {
      const res = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: formatQuery(userMessage),
      });

      const reply = res.text ?? "🤖 Thinking…";
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { from: "bot", text: "😅 Kitchen is busy — try again in a bit!" }]);
    }
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-28 right-8 w-[380px] md:w-[420px] h-[520px] bg-background border border-border rounded-2xl shadow-2xl p-4 z-50 flex flex-col">

          {/* Header */}
          <div className="flex justify-between items-center pb-2 border-b border-border">
            <h3 className="font-bold text-lg text-foreground">🍅 TOMATO Assistant</h3>
            <button onClick={() => setOpen(false)} className="hover:opacity-70">
              <X size={22} />
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto space-y-3 mt-3 pr-1">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`px-3 py-2 rounded-lg text-sm leading-relaxed whitespace-pre-line break-words max-w-[85%] ${
                  m.from === "user"
                    ? "bg-primary text-primary-foreground ml-auto"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div className="flex gap-2 mt-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask something... 🍕"
              className="flex-1 px-3 py-2 rounded-lg border border-input bg-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center z-50"
      >
        {open ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </>
  );
}
