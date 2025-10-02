import axios from "axios";



const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL || 'https://n8n-f1lu.onrender.com'
});


export const parseAudioTranscriptAPI = async (file: File) => {
    const formData = new FormData();
    formData.append('audio', file);

    try {
        const response = await apiClient.post(import.meta.env.VITE_PARSE_AUDIO_TRANSCRIPT_ENDPOINT, formData)
        return response.data;
    } catch (error) {
        console.log('Axios error during transcription:', error);
        throw new Error('Could not parse transcribe the audio. Please ensure it\'s a valid audio file.');
    }
}

