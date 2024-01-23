// this was installed with `npm i @tldraw/tldraw@2.0.0-beta.2`

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