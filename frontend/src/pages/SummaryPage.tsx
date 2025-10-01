import { Button } from '@/components/ui/button';
import CardContent from '@mui/joy/CardContent';
import data from "../data/response.json"
import Tooltip from '@mui/joy/Tooltip';
import Table from '@mui/joy/Table';
import { type JSX } from 'react';
import Chip from '@mui/joy/Chip';
import Card from '@mui/joy/Card';


export default function SummaryPage(): JSX.Element {
    return (
        <div className='flex flex-col items-center p-4 select-none'>
            <div className='flex justify-center'>
                <p className='font-semibold text-lg font-[Outfit]'>Uplaod the audio file</p>
            </div>

            {/* Input File  */}
            <div className='flex justify-center mt-2'>
                <div className='border-2 rounded-lg border-dashed'>
                    <Card variant='soft' sx={{ border: "1px", borderColor: "#000000" }}>
                        <CardContent>
                            <div className='flex flex-wrap gap-4'>
                                <input
                                    id="resume-file"
                                    className={`block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-[#000000ca] cursor-pointer `}
                                    type="file"
                                    accept=".mp3,.wav,.m4a,.ogg,.flac"
                                />
                                <Button>Submit</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/*  */}
            <div className='mt-10'>
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
