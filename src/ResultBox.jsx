import wavImage from "./waveForm.png"

const ResultBox = () => {
  return (
    <div className="result-box-embedded">
      <h4 className="result-title">🎯 <span>Authenticity Score</span></h4>
      <div className="score">99%</div>
      <img src={wavImage} alt="Waveform" className="embedded-wav-image" />
      <p className="result-text">The sampled media is likely real</p>
    </div>
  );
};

export default ResultBox;

