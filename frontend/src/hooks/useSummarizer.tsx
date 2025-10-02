import { useState } from "react"

export const useSummarizer = () => {
    const [isSummarizing, setIsSummarizing] = useState<boolean>(false);
    const [summary, setSummary] = useState<string | null>();
    const [summaryError, setSummaryError] = useState<string | null>(null);

    const summarize = async (transcription: string) => {

        console.log(transcription);

        setIsSummarizing(true)
        setSummary(null)
        setSummaryError(null)

        const prompt = ` You are an AI meeting assistant.
        Your task is:
        1. First, analyze if the provided transcript is from a **meeting/conversation** or from something else (e.g., podcast, lecture, song, story, random text).
        2. If it IS a meeting:
        - Summarize the main discussion points clearly.
        - Extract **action items** with deadlines if mentioned. 
        - Output in JSON format like this:
        {{
            "type": "meeting",
            "summary": "...",
            "action_items": [
                {{"task": "Prepare report", "deadline": "2025-10-03"}},
                {{"task": "Schedule next meeting", "deadline": null}}
            ]
        }}
        
        3. If it is NOT a meeting:
        - Identify what the transcript is about in 1–2 lines (e.g., "This is a university lecture about computer networks").
        - Do NOT create action items.
        - Output in JSON format like this:
        {{
          "type": "non_meeting",
          "description": "This is a podcast interview about AI startups."
        }}
        Transcript:
        ${transcription}
        `

        try {
            const summary = await puter.ai.chat(
                [{ role: "user", content: prompt }],
                {
                    stream: false,
                },
            );

            console.log(summary);
            setSummary(summary?.message?.content);

        } catch (err: any) {
            setSummaryError(err.message || "An unknown error occured in summarizing");
        } finally {
            setIsSummarizing(false);
        }
    }

    return {
        summarize,
        summary,
        isSummarizing,
        summaryError
    }
}


