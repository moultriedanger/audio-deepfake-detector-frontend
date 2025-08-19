import { useState, useEffect, useRef } from 'react';
import DetectButton from './DetectButton';
import RestartButton from './RestartButton';
import { useWavConverter } from "./useWavConverter";
import ResultBox from './ResultBox';
import RecordingAnimation from './RecordingAnimation';

const RecorderControls = ({setDetectStatus, setModelResults}) => {
  const { blobToWav } = useWavConverter();

  const [isRecording, setIsRecording] = useState(false);
  const [counter, setCounter] = useState(0);
  const [recorderReady, setRecorderReady] = useState(false);
  const [wavBlob, setWavBlob] = useState(null);

  const [loading, setLoading] = useState(null);
  

  const mediaRecorderRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]);

  const initializeRecorder = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    streamRef.current = stream;
    mediaRecorderRef.current = new MediaRecorder(stream);
    setRecorderReady(true);
  } catch (err) {
    console.error("Microphone access failed:", err);
    }
  };

  useEffect(() => {
  initializeRecorder();
}, []);

function startRecording() {
  console.log(mediaRecorderRef.current)
  const recorder = mediaRecorderRef.current;
  if (!recorder) {
    console.warn("Recorder not ready!");
    return;
  }

  chunksRef.current = [];

  recorder.ondataavailable = e => {
    chunksRef.current.push(e.data);
    console.log("Data chunk received");
  };

  recorder.onstop = async () => {
    console.log("Recorder stopped");

    const blob = new Blob(chunksRef.current, { type: "audio/ogg; codecs=opus" });
    chunksRef.current = [];

    const wavBlob = await blobToWav(blob, 44100, 1);

    setWavBlob(wavBlob);
  };

  try {
    recorder.start();
    setIsRecording(true);
   
    console.log("Recorder started");
  } catch (e) {
    console.error("Failed to start recorder:", e);
  }
}

function stopRecording() {
  if (!mediaRecorderRef.current) {
    console.warn("Recorder not ready!");
    return;
  }

  const recorder = mediaRecorderRef.current;
  console.log("Calling stop... Recorder state:", recorder.state);

  try {
    recorder.stop();
    streamRef.current.getTracks().forEach(track => track.stop());
    setIsRecording(false);
    setCounter(prev => prev + 1);
  } catch (e) {
    console.error("Failed to stop recorder:", e);
  }
}

  useEffect(() => {
    console.log("Recording:", isRecording);
    console.log("Counter:", counter);
  }, [isRecording, counter]);

  return (
    <div className="record-controls-wrapper">
      <h1>Record Audio</h1>
      <div className="button-container">
        <button className="recorder-button" onClick={startRecording}>Start</button>
        <button className="recorder-button" onClick={stopRecording}>Stop</button>
      </div>
      {isRecording && <div><RecordingAnimation/></div>}
      {counter % 2 !== 0 && <div className='submit-question'>Ready to submit?</div>}

      {counter % 2 !== 0 &&
        <>
        <div className='submit-controls'>
          <DetectButton wavFile = {wavBlob} setDetectStatus = {setDetectStatus} setModelResults = {setModelResults} setLoading = {setLoading}/>
          <RestartButton 
            setWavBlob = {setWavBlob} 
            setCounter = {setCounter}
            mediaRecorderRef = {mediaRecorderRef}
            streamRef = {streamRef}
            chunksRef = {chunksRef}
            setRecorderReady = {setRecorderReady}
            initializeRecorder = {initializeRecorder}
            setDetectStatus = {setDetectStatus}
            />
        </div>
        {loading && (
        <div className="detecting-message" style={{ flexBasis: '100%', marginTop: 6 }}>
          Detecting…
        </div>
      )}
        </>
      }
    </div>
  );
};

export default RecorderControls;
