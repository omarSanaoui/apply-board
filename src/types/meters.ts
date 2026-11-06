import { Status } from "./application";

export interface Meter {
    meterType: Status['id'],
    percent: number,
}