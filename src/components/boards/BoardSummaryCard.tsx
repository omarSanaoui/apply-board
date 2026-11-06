import { statuses } from "@/data/dummyApplication"
import { StatusColor } from "@/types/application"
import { BoardSummary } from "@/types/board"
import { Meter } from "@/types/meters"
import React from "react"

interface BoardCardProps {
    board: BoardSummary
    dropTarget?: boolean
}


const meterStyles: Record<StatusColor, string> = {
    applied: 'bg-applied-solid',
    interview: 'bg-interview-solid',
    offer: 'bg-offer-solid',
    rejected: 'bg-rejected-solid',
    violet: 'bg-violet-solid',
    orchid: 'bg-orchid-solid',
    pink: 'bg-pink-solid',
    teal: 'bg-teal-solid',
    sky: 'bg-sky-solid',
    lime: 'bg-lime-solid',
    orange: 'bg-orange-solid',
    coffee: 'bg-coffee-solid',
    slate: 'bg-slate-solid',
    stone: 'bg-stone-solid',
}



export default function BoardSummaryCard({ board, dropTarget }: BoardCardProps) {
    let lastUpdate = `Updated ${board.daysSinceUpdate} days ago`
    if (board.daysSinceUpdate === 0) lastUpdate = 'Updated today'
    if (board.daysSinceUpdate === 1) lastUpdate = 'Updated yesterday'
    return (
        <div className={`flex flex-col gap-3 px-3 py-4 rounded-xl  ${dropTarget ? 'border-dashed border border-accent bg-accent/15' : 'border border-line bg-surface'}  `}>
            <div className="flex items-baseline justify-between gap-20">
                <span className="font-semibold text-[14px]">{board.name}</span>
                <span className="text-[12px] font-medium text-muted-text">{board.count}</span>
            </div>

            <div className="flex gap-0.5 h-1.5">
                {
                    board.meters.map((meter: Meter, index: number): React.ReactNode => {
                        const meterColor = statuses.find(status => status.id === meter.meterType)?.color
                        if (!meterColor) return null
                        const meterStyle = meterStyles[meterColor]
                        return (<div key={index} style={{ width: meter.percent + '%' }} className={`${meterStyle} first:rounded-l-full last:rounded-r-full`} />)
                    })
                }
            </div>
            <span className={`mt-5 text-[12px] font-medium ${dropTarget ? 'text-accent' : 'text-muted-text'}`}>{dropTarget ? 'Drop to move here' : lastUpdate}</span>
            
        </div>
    )
}
