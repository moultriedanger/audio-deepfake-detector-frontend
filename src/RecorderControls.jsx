import { useState, useEffect} from 'react';

const RecorderControls = () => {
    
    const [isRecording, setIsRecording] = useState(false)
    const [counter, setCounter] = useState(0)

    function startRecording(){
        setIsRecording(true)
        console.log(isRecording)
    }

    function stopRecording(){
        setIsRecording(false)
        if (counter === 0) {
            setCounter(1)
        }
        else{
            setCounter(counter+2)
        }
        
        console.log(isRecording)
    }

    useEffect(() => {
        console.log(isRecording)


    }, [isRecording]);    

    return(
        <div className="button-container">
            <button className="recorder-button" onClick={startRecording}>Start</button>
            <button className="recorder-button" onClick={stopRecording}>Stop</button>
            {isRecording && <div>{"recording..."}</div>}
            {counter % 2 != 0 && <div>{"ready to submit?"}</div>}
        </div>
    )
}
export default RecorderControls;