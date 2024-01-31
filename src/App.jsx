// this was installed with `npm i @tldraw/tldraw@2.0.0-beta.2`

import { Tldraw } from "@tldraw/tldraw";
import { getAssetUrls } from "@tldraw/assets/selfHosted";

// based on https://discord.com/channels/859816885297741824/1197142604106698933/1202273417357692950
import "@tldraw/tldraw/tldraw.css";

const assetUrls = getAssetUrls();

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
        <Tldraw assetUrls={assetUrls}></Tldraw>
      </div>
    </div>
  );
}
