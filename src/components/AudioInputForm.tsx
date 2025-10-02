import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import { Button } from "./ui/button";
import { PuffLoader } from "react-spinners";

export default function AudioInputForm({ file, fileError, handleSubmit, handleFileChange, isTranscribing, isSummarizing }: AudioInputFileProps) {
    return (
        <form className="mt-10 flex flex-col gap-2" onSubmit={handleSubmit}>
            <p className='font-semibold text-lg font-[Outfit] flex items-center gap-2 justify-center'>Uplaod the audio file <span className="text-sm flex items-center justify-center">{"(<20MB)"}</span></p>

            {/* Input File  */}
            <div className='flex justify-center mt-2'>
                <div className='border-2 rounded-lg border-dashed'>
                    <Card variant='soft' sx={{ border: "1px", borderColor: "#000000" }}>
                        <CardContent>
                            <div className='flex flex-wrap gap-4'>
                                <input
                                    id="resume-file"
                                    className={`block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-[#000000ca] cursor-pointer `}
                                    onChange={handleFileChange}
                                    type="file"
                                    accept=".mp3,.wav,.m4a,.ogg,.flac"
                                />
                                <div>

                                    <Button type="submit">
                                        {(isTranscribing || isSummarizing) && <div className="py-2 flex justify-center items-center">
                                            <PuffLoader size={24} color="#fff" />
                                        </div>}
                                        {isTranscribing
                                            ? "Transcribing"
                                            : isSummarizing
                                                ? "Summarizing"
                                                : "Submit"
                                        }
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            {fileError && <p className="flex justify-center items-center mt-2 text-red-600 text-sm">{fileError}</p>}
            {
                file && !fileError && (<p className="flex justify-center items-center text-sm text-green-600"> <strong>✓</strong>&nbsp;{file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</p>)
            }

        </form>
    )
}

{/* <Button className="mt-4 flex" onClick={handleGetStarted}>
    {loading &&
        <div className="py-2 flex justify-center items-center">
            <PuffLoader size={24} color="#fff" />
        </div>
    }
    Get Started
</Button> */}