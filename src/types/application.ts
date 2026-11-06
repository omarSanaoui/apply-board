export type WorkMode = 'On-site' | 'Remote' | 'Hybrid'
export type StatusColor = 'applied' | 'interview' | 'offer' | 'rejected' | 'violet' | 'orchid' | 'pink' | 'teal' | 'sky' | 'lime' | 'orange' | 'coffee' | 'slate' | 'stone'

export interface Status {
    id: string,
    name: string,
    color: StatusColor,
    builtIn: boolean
}

export interface HistoryEntry {
    statusId: Status['id'],
    date: string,
    label?: string,
}

export interface Application {
    id: string
    company: string,
    position: string,
    workMode: WorkMode,
    history: HistoryEntry[]
}