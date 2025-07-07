import React, { useState } from 'react';
import UploadDetectButton from './UploadDetectButton';
import ResultBox from "./ResultBox"

const UploadPanel = () => {
  const [fileName, setFileName] = useState('');
  const [audioFile, setAudioFile] = useState(null)
  const [modelResults, setModelResults] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : '');
    setAudioFile(file)
  };

  return (

    <div className="upload-pannel-wrapper">
        <div className="upload-controls-wrapper">
            <h1>Upload .wav file here</h1>

            <div className="custom-file">
                <span className="custom-file-label">Select an audio file</span>
                <label className="choose-button">
                Choose File
                <input
                    type="file"
                    id="audio"
                    name="audio"
                    accept=".mp3, .wav, .ogg, .m4a, .mov, .mp4"
                    className="hidden-file-input"
                    onChange={handleFileChange}
                />
                </label>
            </div>

            {fileName && <div className="file-name">{fileName}</div>}
            <UploadDetectButton wavFile={audioFile} setModelResults={setModelResults}/>
        </div>
        {modelResults && <ResultBox modelResults={modelResults}/>}
    </div>
  );
};
export default UploadPanel;