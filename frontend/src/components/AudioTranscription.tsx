import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function AudioTranscription({ data }: { data: string | null }) {
    return (
        <div className='max-w-[860px] w-full'>
            <Accordion type='single' collapsible className='bg-gray-100 px-4'>
                <AccordionItem value='item-1'>
                    <AccordionTrigger className='font-semibold text-[16px]'>Transcpition</AccordionTrigger>
                    <AccordionContent className='text-sm font-light font-[Outfit]'>
                        {data}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
