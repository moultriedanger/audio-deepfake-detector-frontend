import {useState} from 'react'
import RecorderControls from "./RecorderControls"
import ResultBox from "./ResultBox"

const RecordPannel = () => {
  const [detectStatus, setDetectStatus] = useState(false);
  const [modelResults, setModelResults] = useState(null);

  return (
    <div className="recorder-container">
        <RecorderControls setDetectStatus={setDetectStatus} setModelResults = {setModelResults}/>
        {detectStatus && <ResultBox modelResults = {modelResults}/>}
    </div>

  );
};
export default RecordPannel;
