import type { JSX } from "react";
import { useNavigate } from "react-router"
import { Button } from "@/components/ui/button";
import { PuffLoader } from "react-spinners";

export default function HomePage(): JSX.Element {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/summary");
    }

    return (
        <div className="h-full flex flex-col items-center justify-center font-[Inter]">
            <h1 className="scroll-m-20 text-center max-md:text-[2rem] text-[4rem] min-sm:leading-18 font-extrabold tracking-tight text-balance max-w-[1000px]">
                AI-Powered Meeting Summaries in Minutes
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6 font-semibold max-w-[600px] max-sm:text-sm  text-center">
                Stop taking notes. Simply upload your meeting recording, and our AI will deliver the concise, actionable summary for you.
            </p>
            <Button className="mt-4 flex" onClick={handleGetStarted}>
                {false &&
                    <div className="py-2 flex justify-center items-center">
                        <PuffLoader size={24} color="#fff" loading />
                    </div>
                }

                Get Started
            </Button>

        </div>
    )
}
