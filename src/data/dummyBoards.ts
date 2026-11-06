import { BoardSummary } from "@/types/board";

export const dummyBoards: BoardSummary[] = [
    {
        id: 'b1a4c7e2', name: 'Remote roles', count: 8, daysSinceUpdate: 1,
        meters: [
            { meterType: 'applied', percent: 50 },
            { meterType: 'interview', percent: 28 },
            { meterType: 'rejected', percent: 22 },
        ]
    },
    {
        id: 'd93f0a51', name: 'Freelance leads', count: 5, daysSinceUpdate: 7,
        meters: [
            { meterType: 'applied', percent: 40 },
            { meterType: 'interview', percent: 20 },
            { meterType: 'offer', percent: 40 },
        ]
    },
    {
        id: '7e5b2c98', name: 'Graduate programs', count: 11, daysSinceUpdate: 0,
        meters: [
            { meterType: 'applied', percent: 72 },
            { meterType: 'interview', percent: 14 },
            { meterType: 'rejected', percent: 14 },
        ]
    },
    {
        id: '4c18e6af', name: 'Archive 2025', count: 34, daysSinceUpdate: 120,
        meters: [
            { meterType: 'offer', percent: 8 },
            { meterType: 'rejected', percent: 92 },
        ]
    },
]
