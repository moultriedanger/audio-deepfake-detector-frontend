import restart from "./restart.png"


const RestartButton = (props) => {

    let setWavBlob = props.setWavBlob;
    let setCounter = props.setCounter;
    let mediaRecorderRef = props.mediaRecorderRef;
    let streamRef = props.streamRef;
    let chunksRef = props.chunksRef;
    let setRecorderReady = props.setRecorderReady;
    let initializeRecorder = props.initializeRecorder;


    function handleRestart(){
        setWavBlob(null);
        setCounter(0);
        streamRef.current = null;
        chunksRef.current = [];
        console.log("Restarted!");
        initializeRecorder();
        console.log("initalized")
    }

    return(
        <button onClick={()=> handleRestart()} className="restart-button">
            <img src={restart} alt="restart icon" className="button-icon"/>
        </button>
    )
}
export default RestartButton
