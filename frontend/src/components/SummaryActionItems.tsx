import Table from '@mui/joy/Table';


export default function SummaryActionItems({ tableData }: { tableData: Summaryreponse | null }) {
    return (
        <div className='mt-4'>
            <Table aria-label="actions_table" variant='outlined' borderAxis='bothBetween' size='md' stickyHeader sx={{ fontFamily: "Outfit", maxWidth: "860px", fontWeight: "500" }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>Action</th>
                        <th style={{ textAlign: "center" }}>Task&nbsp;</th>
                        <th style={{ textAlign: "center" }}>Deadline&nbsp;</th>
                    </tr>
                </thead>
                {tableData?.action_items?.map((action, index) => (
                    <tbody key={index}>
                        <tr>
                            <td className='text-center'>{index + 1}</td>
                            <td className='text-left'>{action.task}</td>
                            <td className='text-center'>{action.deadline === null ? "-" : action.deadline}</td>
                        </tr>
                    </tbody>
                ))}
            </Table>
            {!tableData?.action_items && (<div className='my-4 text-center font-[Outfit] text-sm font-medium'>NO ACTION ITEMS</div>)}
        </div>
    )
}
