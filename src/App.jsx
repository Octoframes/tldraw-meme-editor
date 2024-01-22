import { Tldraw } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";
import { useState } from "react";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ width: 500, height: 500 }}>
        <Tldraw></Tldraw>
      </div>
    </div>
  );
}
