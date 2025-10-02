import Chip from '@mui/joy/Chip';
import Tooltip from '@mui/joy/Tooltip';

export default function SummaryMeetingType({ data }: { data: Summaryreponse | null }) {
    return (
        <Tooltip title="type" placement='right' size='sm' variant='soft' arrow color='primary'>
            <Chip sx={{ textTransform: "capitalize" }} variant='solid' color='neutral' size='sm'>{data?.type}</Chip>
        </Tooltip>
    )
}
