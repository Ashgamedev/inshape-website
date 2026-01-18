"use client";

import { useState } from "react";

export default function AIWidget() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("Idle");

  async function startConversation() {
    setStatus("Listening...");

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = async (event: any) => {
      const userText = event.results[0][0].transcript;
      setStatus("Thinking...");

      const reply = await askGemini(userText);

      speak(reply);
      setStatus("Idle");
    };
  }

  async function askGemini(text: string) {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text }] }],
        }),
      }
    );

    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand.";
  }

  function speak(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "#ff5a3c",
          color: "white",
          fontSize: 24,
          border: "none",
          cursor: "pointer",
          zIndex: 9999,
        }}
      >
        🎤
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 20,
            width: 260,
            padding: 15,
            background: "white",
            borderRadius: 10,
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            zIndex: 9999,
          }}
        >
          <strong>AI Receptionist</strong>
          <p>Status: {status}</p>
          <button onClick={startConversation}>Talk</button>
        </div>
      )}
    </>
  );
}
