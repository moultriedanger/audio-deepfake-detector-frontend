import {useState} from "react"


const UploadDetectButton = ({wavFile, setModelResults}) =>{

    const baseURL = import.meta.env.VITE_API_URL;

    async function handleDetect(){
        const url = `${baseURL}/predict`
        

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