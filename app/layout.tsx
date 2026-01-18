import "./globals.css";
import React from "react";

export const metadata = {
  title: "Inshape Fitness",
  description: "Personal fitness coaching studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* AI Receptionist Widget Container */}
        <div
          id="ai-receptionist-widget"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#ff6b4a",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "26px",
            cursor: "pointer",
            zIndex: 9999,
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
          title="Talk to our AI receptionist"
          onClick={() => {
            alert("AI receptionist coming next 🚀");
          }}
        >
          🎤
        </div>
      </body>
    </html>
  );
}

