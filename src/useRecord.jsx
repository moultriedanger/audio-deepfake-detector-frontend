import { useState, useEffect } from "react";
import Recorder from 'recorder-js';

const useRecord = () => {

    const audioContext =  new (window.AudioContext || window.webkitAudioContext)();
 
    const recorder = new Recorder(audioContext, {
    // An array of 255 Numbers
    // You can use this to visualize the audio stream
    // If you use react, check out react-wave-stream
    onAnalysed: data => console.log(data),
    });

    navigator.mediaDevices.getUserMedia({audio: true})
        .then(stream => recorder.init(stream))
        .catch(err => console.log('Uh oh... unable to get stream...', err));

}
export default useRecord;