"use client";

export default function AIWidget() {
  return (
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
  );
}

