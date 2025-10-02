export default function TranscribedSummary({ data }: { data: Summaryreponse | null }) {
    return (
        <p className='font-[Outfit] font-medium text-[14px]'>{data?.description ? data?.description : data?.summary}</p>
    )
}
