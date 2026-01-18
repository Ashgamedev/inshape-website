import "./globals.css";
import React from "react";
import AIWidget from "./components/AIWidget";

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
        <AIWidget />
      </body>
    </html>
  );
}

