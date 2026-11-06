import ApplicationCard from './ApplicationCard'
import { Status } from '@/types/application'
import { dummyApplications } from '@/data/dummyApplication';

interface CardColumnProps {
    status: Status;
}

const colStyles: Record<Status['color'], string> = {
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

export default function CardColumn({ status }: CardColumnProps) {
    const colStyle = colStyles[status.color]
    const applications = dummyApplications.filter(a => a.history.at(-1)?.statusId === status.id)
    return (
        <div className='w-50'>
            <div className="flex h-7 items-center gap-2 mb-1">
                <span className={`size-2.5 shrink-0 rounded-full ${colStyle}`}></span>
                <span className="text-sm font-semibold">{status.name}</span>
                <span className="ml-auto rounded-full bg-border px-2 py-0.5 text-xs font-medium text-muted-text">{applications.length}</span>
            </div>
            <div className='flex flex-col gap-3'>
                {
                    applications.slice(0,3).map((application) => <ApplicationCard key={application.id} application={application} status={status}/>)
                }
                {applications.slice(3).length !== 0 && <p className='text-[12px] font-medium text-muted-text'>+{applications.slice(3).length} more</p>}
            </div>
        </div>
    )
}



