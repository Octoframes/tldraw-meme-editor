import { Tldraw } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";

export default function App() {
  const assetUrls = "/public"
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
        <Tldraw assetUrls={assetUrls}></Tldraw>
      </div>
    </div>
  );
}