import RecordPannel from "./RecordPannel";
import ProductInfo from "./ProductInfo"
import UploadPannel from "./UploadPannel"
import SampleDownload from "./SampleDownload";
import { useState } from "react";

const Product = () => {
  const [mode, setMode] = useState("record");

  return (
    <div className="product-page-container">
      <ProductInfo />

      <div className="audio-panel-card">
        <div className="audio-panel-header">
          <h3>{mode === "record" ? "Record Audio" : "Upload Audio"}</h3>
          <div className="audio-toggle">
            <button
              className={mode === "record" ? "active" : ""}
              onClick={() => setMode("record")}
            >
              Record
            </button>
            <button
              className={mode === "upload" ? "active" : ""}
              onClick={() => setMode("upload")}
            >
              Upload
            </button>
          </div>
        </div>

        <div className="audio-panel-body">
          {mode === "record" ? <RecordPannel /> : <UploadPannel />}
        </div>
      </div>

      <SampleDownload />
    </div>
  );
};
export default Product