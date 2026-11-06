interface Stat {
    figure: string,
    text: string,
}
type MeterType = 'applied' | 'interview' | 'offer' | 'rejected'

interface Meter {
    meterType: MeterType,
    percent: number,
}
const stats: Array<Stat> = [
    { figure: '20', text: 'Applied' },
    { figure: '25%', text: 'Interview rate' },
    { figure: '2', text: 'Offers' },
]
const meters: Array<Meter> = [
    { meterType: 'applied', percent: 57 },
    { meterType: 'interview', percent: 16 },
    { meterType: 'offer', percent: 12 },
    { meterType: 'rejected', percent: 15 },
]
const meterStyles: Record<MeterType, string> = {
    applied: 'bg-applied-solid',
    interview: 'bg-interview-solid',
    offer: 'bg-offer-solid',
    rejected: 'bg-rejected-solid',
}
export default function SeasonStatsCard() {
    return (
        <div className="flex flex-col gap-3 w-72 rounded-[14px] px-5 py-6 bg-glass backdrop-blur-xs">
            <span className="text-muted-text font-medium text-[14px] tracking-wider">THIS SEASON</span>
            <div className="flex gap-4">
                {stats.map((stat: Stat, index: number): React.ReactNode => <p key={index} className="flex flex-col gap-0.5 text-muted-text text-[12px] font-medium"><span className="font-heading font-semibold text-[26px] text-text">{stat.figure}</span>{stat.text}</p>)}
            </div>
            <div className="flex gap-0.5">
                {meters.map((meter: Meter, index: number): React.ReactNode => {
                    const meterStyle = meterStyles[meter.meterType]
                    return (<div key={index} style={{ width: meter.percent + '%' }} className={`h-2 ${meterStyle} first:rounded-l-full last:rounded-r-full`} />)
                })}
            </div>

        </div>
    )
}