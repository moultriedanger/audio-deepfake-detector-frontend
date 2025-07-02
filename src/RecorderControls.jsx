import { useState, useEffect} from 'react';
import DetectButton from './DetectButton';
import RestartButton from './RestartButton';

const RecorderControls = () => {
    
    const [isRecording, setIsRecording] = useState(false)
    const [counter, setCounter] = useState(0)

    function startRecording(){
        setIsRecording(true)
        setCounter(counter+1)
    }

    function stopRecording(){
        setIsRecording(false)
        if (counter === 0) {
            setCounter(1)
        }
        else{
            setCounter(counter+1)
        }
    }

    useEffect(() => {
        console.log(counter)
        console.log(isRecording)

    }, [isRecording, counter]);    

    return(
        <div className="button-container">
            <button className="recorder-button" onClick={startRecording}>Start</button>
            <button className="recorder-button" onClick={stopRecording}>Stop</button>
            {isRecording && <div>{"recording..."}</div>}
            {counter % 2 !== 0 && <div>{"ready to submit?"}</div>}
            {counter % 2 !== 0 && 
            <div className='submit-controls'>
                <DetectButton/>
                <RestartButton/>
            </div>}
        </div>
    )
}
export default RecorderControls;