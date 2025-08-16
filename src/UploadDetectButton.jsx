import {useState} from "react"


const UploadDetectButton = ({wavFile, setModelResults}) =>{

    const [loading, setLoading] = useState(false);
    const baseURL = import.meta.env.VITE_API_URL;

    async function handleDetect(){

        setLoading(true);
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
            setLoading(false)
        }
        catch (error){
            console.log(error)
        }
    }

    return (
        <div>
            <button className="upload-detect-button" onClick={() => handleDetect()}>Detect Now</button>
            {loading && <div className="detecting-message">Detecting…</div>}
        </div>
    )

}
export default UploadDetectButton;