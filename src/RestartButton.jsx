import restart from "./restart.png"

function handleRestart(){
    alert("restarted")
}


const RestartButton = () => {
    return(
        <button onClick={()=> handleRestart()} className="restart-button">
            <img src={restart} alt="restart icon" className="button-icon"/>
        </button>
    )
}
export default RestartButton
