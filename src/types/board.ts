import { Meter } from "./meters";

export interface BoardSummary{
    id: string,
    name: string,
    count: number,
    meters: Meter[],
    daysSinceUpdate: number //days
}