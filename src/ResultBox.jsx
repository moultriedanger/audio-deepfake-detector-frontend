import { redirect } from "react-router-dom";
import wavImage from "./waveForm.png"

const ResultBox = ({modelResults}) => {

    const real = modelResults.binary_classification.real

    const real_percentage = Math.round(real, 2) * 100
    console.log(real, real_percentage)

    function getColor(){
        
        if (real_percentage < 50){
            return "red"
        }
        else if (real_percentage < 75){
            return "oange"
        }
        else if (real_percentage < 87){
            return "lightgreen"
        }
        else {
            return "green"
        }
    }

    return (
        <div className="result-box-embedded">
        <h4 className="result-title"><span>Authenticity Score:</span></h4>
        <div className="score" style={{color: getColor()}}>{real_percentage}%</div>
        <img src={wavImage} alt="Waveform" className="embedded-wav-image" />
        <p className="result-text">The sampled media is most likely {real > .5 ? "real": "fake"}</p>
        </div>
    );
};

export default ResultBox;

