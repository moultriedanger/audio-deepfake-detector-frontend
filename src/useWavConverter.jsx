export function useWavConverter() {
  async function blobToWav(blob, sampleRate = 44100, numChannels = 1) {
    const arrayBuffer = await blob.arrayBuffer();
    const audioContext = new AudioContext();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    const float32Array = audioBuffer.getChannelData(0);
    const int16Array = float32ToInt16(float32Array);
    const header = createWavHeader(int16Array.length * 2, numChannels, sampleRate);
    return new Blob([header, new Uint8Array(int16Array.buffer)], { type: 'audio/wav' });
  }

  function createWavHeader(dataLength, numChannels, sampleRate) {
    const header = new ArrayBuffer(44);
    const view = new DataView(header);

    view.setUint32(0, 0x52494646, false); // "RIFF"
    view.setUint32(4, 36 + dataLength, true);
    view.setUint32(8, 0x57415645, false); // "WAVE"
    view.setUint32(12, 0x666d7420, false); // "fmt "
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * numChannels * 2, true);
    view.setUint16(32, numChannels * 2, true);
    view.setUint16(34, 16, true);
    view.setUint32(36, 0x64617461, false); // "data"
    view.setUint32(40, dataLength, true);

    return header;
  }

  function float32ToInt16(float32Array) {
    const int16Array = new Int16Array(float32Array.length);
    for (let i = 0; i < float32Array.length; i++) {
      int16Array[i] = Math.max(-1, Math.min(1, float32Array[i])) * 0x7FFF;
    }
    return int16Array;
  }

  return { blobToWav };
}
