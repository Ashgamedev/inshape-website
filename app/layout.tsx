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

        {/* AI Voice Receptionist Widget */}
        <iframe
          src="https://ai.studio/apps/drive/1cwRrWAnHZ7H4HUBZvj6vg2m7GVDSwPhW"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "360px",
            height: "520px",
            border: "none",
            borderRadius: "12px",
            zIndex: 9999,
          }}
          allow="microphone"
        />
      </body>
    </html>
  );
}

