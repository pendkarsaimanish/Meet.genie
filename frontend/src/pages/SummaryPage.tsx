import { useEffect, useState, type JSX } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import SummaryActionItems from '@/components/SummaryActionItems';
import SummaryMeetingType from '@/components/SummaryMeetingType';
import AudioTranscription from '@/components/AudioTranscription';
import TranscribedSummary from '@/components/TranscribedSummary';


export default function SummaryPage(): JSX.Element {

    const { transcription, summary } = useLocation().state;
    const data = JSON.parse(summary);
    const navigate = useNavigate();
    const [tdata, setTData] = useState(null);
    const [sdata, setSData] = useState<Summaryreponse | null>(null);

    useEffect(() => {
        if (transcription && summary) {
            setTData(transcription)
            setSData(data)
        }
    }, [transcription, summary])

    const handleNewSummary = () => {
        setSData(null);
        setTData(null);
        navigate("/");
    }

    return (
        <div className='flex flex-col gap-3 items-center p-4'>

            <div className=''>
                {/* New Button */}
                <div className='flex mb-3'>
                    <Button variant={'default'} size={"sm"} onClick={handleNewSummary} className='flex justify-center items-center'>
                        <span className='text-[16px]'>+</span> New
                    </Button>
                </div>
                <p className='font-semibold text-2xl font-[Outfit]'>{sdata?.description ? "Description" : "Summary"}</p>
                <div className='mt-1'>
                    {/* Summary or Description */}
                    <TranscribedSummary data={sdata} />

                    {/* Meeting Type */}
                    <SummaryMeetingType data={sdata} />

                    {/* Action Items */}
                    {(!sdata?.action_items) &&
                        <SummaryActionItems tableData={sdata} />
                    }
                </div>
            </div>

            {/* Transcription */}
            <AudioTranscription data={tdata} />
        </div>
    )
}
