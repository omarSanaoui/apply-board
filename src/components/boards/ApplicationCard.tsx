import { Application, Status } from "@/types/application"

interface CardProps{
    application: Application
    status: Status
}

const cardStyles: Record<Status['color'], string> = {
    applied: 'bg-applied-tint',
    interview: 'bg-interview-tint',
    offer: 'bg-offer-tint',
    rejected: 'bg-rejected-tint',
    violet: 'bg-violet-tint',
    orchid: 'bg-orchid-tint',
    pink: 'bg-pink-tint',
    teal: 'bg-teal-tint',
    sky: 'bg-sky-tint',
    lime: 'bg-lime-tint',
    orange: 'bg-orange-tint',
    coffee: 'bg-coffee-tint',
    slate: 'bg-slate-tint',
    stone: 'bg-stone-tint',
}
export default function ApplicationCard({application,status}:CardProps) {
    const lastEntry = application.history.at(-1)
    if (!lastEntry) return null
    const cardStyle = cardStyles[status.color]
    return (
        <div className={`flex flex-col gap-3 w-full max-w-56 rounded-[10px] px-3 py-4 ${cardStyle}`}>
            <div className="flex flex-col">
                <span className="font-semibold text-[14px]">{application.company}</span>
                <span className="text-[13px] text-muted-text">{application.position}</span>
            </div>
            <div className="flex gap-2 justify-between font-medium text-[12px] text-muted-text">
                <p>{lastEntry.label ? lastEntry.label + ' · ' : ''}{lastEntry.date}</p>
                <p>{application.workMode}</p>
            </div>
        </div>
    )
}