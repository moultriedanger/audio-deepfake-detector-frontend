import {useState} from 'react'
import RecorderControls from "./RecorderControls"
import ResultBox from "./ResultBox"

const RecordPannel = () => {
  const [detectStatus, setDetectStatus] = useState(false);

  return (
    <div className="recorder-container">
        <RecorderControls setDetectStatus={setDetectStatus} />
        {detectStatus && <ResultBox />}
    </div>

  );
};
export default RecordPannel;
