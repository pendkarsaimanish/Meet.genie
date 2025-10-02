import Chip from '@mui/joy/Chip';
import { type JSX } from 'react';
import Table from '@mui/joy/Table';
import Tooltip from '@mui/joy/Tooltip';
import data from "../data/response.json"
import { useLocation } from 'react-router';


export default function SummaryPage(): JSX.Element {


    const { transcription, summary } = useLocation().state;

    console.log({ transcription, summary });

    return (
        <div className='flex flex-col items-center p-4 select-none'>
            <div className=''>
                <p className='font-semibold text-2xl font-[Outfit]'>Summary</p>
                <div className='mt-1'>
                    <p className='font-[Inter] text-sm select-all'>{data.summary}</p>
                    <Tooltip title="type" placement='right' size='sm' variant='soft' arrow color='primary'>
                        <Chip sx={{ textTransform: "capitalize" }} variant='solid' color='neutral' size='sm'>{data.type}</Chip>
                    </Tooltip>

                    <div className='mt-4'>
                        <Table aria-label="actions_table" variant='outlined' borderAxis='bothBetween' size='md' stickyHeader sx={{ fontFamily: "Outfit", maxWidth: "860px", fontWeight: "500" }}>
                            <thead>
                                <tr>
                                    <th style={{ textAlign: "center" }}>Action</th>
                                    <th style={{ textAlign: "center" }}>Task&nbsp;</th>
                                    <th style={{ textAlign: "center" }}>Deadline&nbsp;</th>
                                </tr>
                            </thead>
                            {data.action_items.map((action, index) => (
                                <tbody key={index}>
                                    <tr>
                                        <td className='text-center'>{index + 1}</td>
                                        <td className='text-center'>{action.task}</td>
                                        <td className='text-center'>{action.deadline === null ? "-" : action.deadline}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}
