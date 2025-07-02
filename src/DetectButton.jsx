const DetectButton = () => {

    function handleDetect(){

        alert("detected")
    }

    return(
        <div className="detect-button">
            <button onClick={() => handleDetect()}>Detect Now</button>
        </div>
    )

}
export default DetectButton