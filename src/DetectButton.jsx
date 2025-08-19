import { useState } from "react";

const DetectButton = ({wavFile, setDetectStatus, setModelResults, setLoading}) => {

    const baseURL = import.meta.env.VITE_API_URL;

    async function handleDetect(){
        const url = `${baseURL}/predict`
        
        try {
            const formData = new FormData();
            formData.append("file", wavFile, "recording.wav"); 

            setLoading(true)
            const response = await fetch(url, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json()
            console.log("RESPONSE!!!", result)
            setDetectStatus(true)
            console.log("detected!")
            setModelResults(result)
            setLoading(false)

        }
        catch (error){
            console.log(error)
        }
    }

    return(
        <>
        <button className="detect-button" onClick={() => handleDetect()}>Detect Now</button>
        </>
    )
}
export default DetectButton