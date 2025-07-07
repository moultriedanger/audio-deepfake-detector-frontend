import {useState} from "react"

const UploadDetectButton = ({wavFile, setModelResults}) =>{

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
            const result = await response.json()
            console.log("RESPONSE!!!", result.binary_classification)
            setModelResults(result)
        }
        catch (error){
            console.log(error)
        }
    }

    return (
        <button className="upload-detect-button" onClick={() => handleDetect()}>Detect Now</button>
    )

}
export default UploadDetectButton;