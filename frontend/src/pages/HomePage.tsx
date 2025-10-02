import { useNavigate } from "react-router";
import { PuffLoader } from "react-spinners";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState, type JSX } from "react";
import AudioInputForm from "@/components/AudioInputForm";
import { useAudioTranscriber } from "@/hooks/useAudioTranscriber";
import { useSummarizer } from "@/hooks/useSummarizer";

export default function HomePage(): JSX.Element {
    const navigate = useNavigate();
    const { user, loading, signInUser } = useAuth();
    const { summarize, summary, isSummarizing, summaryError } = useSummarizer();
    const [file, setFile] = useState<File | null>(null);
    const [fileError, setFileError] = useState<string | null>(null);
    const { transcribe, isTranscribing, transcription } = useAudioTranscriber();

    useEffect(() => {
        if (transcription) {
            summarize(transcription);
        }
    }, [transcription])

    useEffect(() => {
        if (transcription && summary) {
            navigate("/summary", { state: { transcription: transcription, summary: summary } });
        }
    }, [transcription, summary, navigate])

    const handleGetStarted = () => {
        signInUser();
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (file) {
            transcribe(file);
        }
    }

    const validateFile = (selectedFile: File) => {
        const maxSize = 20 * 1024 * 1024; //10MB
        const allowedTypes = [
            'audio/mpeg', // .mp3
            'audio/mp3',
            'audio/wav',  // .wav
            'audio/flac', // .flac
            'audio/ogg',  // .ogg
            'audio/mp4',  // .m4a
            'audio/x-m4a',
            'audio/aac',  // .aac
        ];
        const allowedExtensions = ['.mp3', '.wav', '.flac', '.ogg', '.m4a', '.aac'];

        if (selectedFile.size > maxSize) {
            setFileError("File size exceeds the limit of 10MB.");
            return false;
        }

        if (allowedTypes.includes(selectedFile.type) && !allowedExtensions.some(ext => selectedFile.name.endsWith(ext))) {
            setFileError("Please upload a valid audio file.")
            return false;
        }

        setFileError("");
        return true;
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        if (selectedFile && validateFile(selectedFile)) {
            setFile(selectedFile);
        } else if (selectedFile) {
            setFile(null);
        }
    }


    return (
        <div className="h-full flex flex-col items-center justify-center font-[Inter] p-4">
            <h1 className="scroll-m-20 text-center max-md:text-[2rem] text-[4rem] min-sm:leading-18 font-extrabold tracking-tight text-balance max-w-[1000px]">
                AI-Powered Meeting Summaries in Minutes
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 font-semibold max-w-[600px] max-sm:text-sm  text-center">
                Stop taking notes. Simply upload your meeting recording, and our AI will deliver the concise, actionable summary for you.
            </p>
            {(user && !loading)
                ?
                <AudioInputForm file={file} fileError={fileError} handleSubmit={handleSubmit} handleFileChange={handleFileChange} user={user} isTranscribing={isTranscribing} isSummarizing={isSummarizing} />
                :
                <Button className="mt-4 flex" onClick={handleGetStarted}>
                    {loading &&
                        <div className="py-2 flex justify-center items-center">
                            <PuffLoader size={24} color="#fff" />
                        </div>
                    }
                    Get Started
                </Button>
            }

        </div >
    )
}