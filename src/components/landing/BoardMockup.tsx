import { MousePointer2, Plus } from "lucide-react"
import Button from "../ui/Button"
import CardColumn from "../boards/CardColumn"
import SeasonStatsCard from "../boards/SeasonStatsCard"
import { dummyApplications, statuses } from "@/data/dummyApplication"
import BoardSummaryCard from "../boards/BoardSummaryCard"
import { dummyBoards } from "@/data/dummyBoards"
import ApplicationCard from "../boards/ApplicationCard"

export default function BoardMockup() {
    const rejected = statuses.find(status => status.id === 'rejected')
    const flying = dummyApplications.find(application => application.company === 'Tessellate')
    if (!rejected || !flying) return null
    // the Rejected column is hand-built: the flying card has left its slot, so it's shown as a dashed ghost
    const rejectedApplications = dummyApplications.filter(a => a.history.at(-1)?.statusId === rejected.id)
    const [first, ...rest] = rejectedApplications.filter(a => a.id !== flying.id)
    return (
        <div className="relative w-full max-w-280 h-170 rounded-[18px] bg-board border border-line shadow-[0_24px_60px_-30px_rgba(0,0,0,0.5)]" inert>
            <div className="absolute left-6 right-6 top-5.5 flex items-center gap-4">
                <div className="flex flex-col gap-0.5">
                    <h2 className="font-heading font-semibold text-[22px] tracking-[-0.01em]">Summer 2026 internships</h2>
                    <p className="text-[13px] text-muted-text">{dummyApplications.length} applications · updated today</p>
                </div>
                <div className="ml-auto flex items-center gap-2.5">
                    <Button variant="secondary" size="sm">Filter</Button>
                    <Button size="sm">
                        <Plus size={16} className="text-on-accent" />
                        Add application
                    </Button>
                </div>
            </div>

            <div className="absolute left-6 top-23 grid grid-cols-4 gap-4 w-212">
                {statuses.filter(status => status.id !== rejected.id).map((status) => <CardColumn key={status.id} status={status} />)}
                <div className="w-50">
                    <div className="flex h-7 items-center gap-2 mb-1">
                        <span className="size-2.5 shrink-0 rounded-full bg-rejected-solid"></span>
                        <span className="text-sm font-semibold">{rejected.name}</span>
                        <span className="ml-auto rounded-full bg-border px-2 py-0.5 text-xs font-medium text-muted-text">{rejectedApplications.length}</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        {first && <ApplicationCard application={first} status={rejected} />}
                        {/* invisible copy of the flying card gives the ghost the exact same height; the outline is inset so it adds no size */}
                        <div className="rounded-[10px] bg-rejected-tint/80 outline-2 -outline-offset-2 outline-dashed outline-rejected-solid">
                            <div className="relative -top-6 -right-56 rotate-4">
                                <ApplicationCard application={flying} status={rejected} />
                                <MousePointer2 size={22} className="fill-background text-text absolute  bottom-3 right-20" />
                            </div>
                        </div>
                        {rest.map((application) => <ApplicationCard key={application.id} application={application} status={rejected} />)}
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 p-6 w-full gap-5 grid grid-cols-4 rounded-b-[18px] bg-row border-t border-t-border">
                {
                    dummyBoards.map((board, index) => <BoardSummaryCard key={board.id} board={board} dropTarget={index === dummyBoards.length - 1} />)
                }
            </div>

            {/* curved arrow from the flying card down to the drop-target board; positions are eyeballed from the right edge */}
            <svg aria-hidden viewBox="0 0 100 180" fill="none" className="absolute top-81.5 right-21 w-25 h-45 text-accent">
                <path d="M60 4 C 10 50, 90 110, 50 168" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="2 7" />
                <path d="M60.8 162.9 L50 168 L51 156.1" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <div className="absolute -left-20 top-19.5 z-10">
                <SeasonStatsCard />
            </div>
        </div>
    )
}
