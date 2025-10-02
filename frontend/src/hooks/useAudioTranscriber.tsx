import { parseAudioTranscriptAPI } from "@/api/api";
import { useState } from "react"

export const useAudioTranscriber = (): AudioTranscriptionProps => {

    const [isTranscribing, setIsTranscribing] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [transcription, setTranscription] = useState<string | null>(null);

    const tanscribe = async (file: File) => {
        setIsTranscribing(true);
        setTranscription(null);
        setError(null);

        try {
            const data = await parseAudioTranscriptAPI(file)
            setTranscription(data?.transcription)
        } catch (error: any) {
            setError(error.message || "An Unkown error occured")
        }
        finally {
            setIsTranscribing(false)
        }
    }

    return {
        transcription,
        isTranscribing,
        error,
        transcribe: tanscribe
    };

}

