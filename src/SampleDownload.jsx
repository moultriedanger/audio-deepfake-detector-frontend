const SampleDownload = () => {
  return (
    <div className="download-container">
      <div className="audio-title">Speechify Sample Download</div>
      <audio controls>
        <source src="/public/sample_audio/speechify_generated_lady.wav" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default SampleDownload;

