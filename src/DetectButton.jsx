const DetectButton = ({wavFile, setDetectStatus}) => {

    async function handleDetect(){
        const url = 'http://127.0.0.1:5000/predict'

        try {
            const formData = new FormData();
            formData.append("file", wavFile, "recording.wav"); 

            const response = await fetch(url, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = response.json()
            console.log("RESPONSE!!!", result)
            setDetectStatus(true)
            console.log("detected!")
          
        }
        catch (error){
            console.log(error)
        }
    }


    return(
        <button className="detect-button" onClick={() => handleDetect()}>Detect Now</button>
    )
}
export default DetectButton