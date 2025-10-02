import Chip from '@mui/joy/Chip';
import { useEffect, useState, type JSX } from 'react';
import Table from '@mui/joy/Table';
import Tooltip from '@mui/joy/Tooltip';
import { useLocation, useNavigate } from 'react-router';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button';


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

            {/* Summary, table & actions */}
            <div className=''>
                <div className='flex mb-3'>
                    <Button variant={'default'} size={"sm"} onClick={handleNewSummary} className='flex justify-center items-center'>
                        <span className='text-[16px]'>+</span> New
                    </Button>
                </div>
                <p className='font-semibold text-2xl font-[Outfit]'>{sdata?.description ? "Description" : "Summary"}</p>
                <div className='mt-1'>
                    {/* Summary or Description */}
                    <p className='font-[Outfit] font-medium text-[14px]'>{sdata?.description ? sdata?.description : data.summary}</p>

                    {/* Meeting Type */}
                    <Tooltip title="type" placement='right' size='sm' variant='soft' arrow color='primary'>
                        <Chip sx={{ textTransform: "capitalize" }} variant='solid' color='neutral' size='sm'>{data.type}</Chip>
                    </Tooltip>


                    {/* Action Items */}
                    {(!sdata?.action_items) &&

                        <div className='mt-4'>
                            <Table aria-label="actions_table" variant='outlined' borderAxis='bothBetween' size='md' stickyHeader sx={{ fontFamily: "Outfit", maxWidth: "860px", fontWeight: "500" }}>
                                <thead>
                                    <tr>
                                        <th style={{ textAlign: "center" }}>Action</th>
                                        <th style={{ textAlign: "center" }}>Task&nbsp;</th>
                                        <th style={{ textAlign: "center" }}>Deadline&nbsp;</th>
                                    </tr>
                                </thead>
                                {sdata?.action_items?.map((action, index) => (
                                    <tbody key={index}>
                                        <tr>
                                            <td className='text-center'>{index + 1}</td>
                                            <td className='text-left'>{action.task}</td>
                                            <td className='text-center'>{action.deadline === null ? "-" : action.deadline}</td>
                                        </tr>
                                    </tbody>
                                ))}
                            </Table>
                            {!sdata?.action_items && (<div className='my-4 text-center font-[Outfit] text-sm font-medium'>NO ACTION ITEMS</div>)}
                        </div>}
                </div>
            </div>

            {/* Accordation */}
            <div className='w-full'>
                <Accordion type='single' collapsible className='bg-gray-100 px-4'>
                    <AccordionItem value='item-1'>
                        <AccordionTrigger className='font-semibold text-[16px]'>Transcpition</AccordionTrigger>
                        <AccordionContent className='text-sm font-light font-[Outfit]'>
                            {tdata}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}
