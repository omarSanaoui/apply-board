import { Application, Status } from "@/types/application";

export const statuses: Status[] = [
  { id: 'applied', name: 'Applied', color: 'applied', builtIn: true },
  { id: 'interview', name: 'Interview', color: 'interview', builtIn: true },
  { id: 'offer', name: 'Offer', color: 'offer', builtIn: true },
  { id: 'rejected', name: 'Rejected', color: 'rejected', builtIn: true },
]

export const dummyApplications: Application[] = [
    {
        id: '0efca264', company: 'Meridian Studio', position: 'Web Developer Intern', workMode: 'On-site', 
        history: [
            { statusId: 'applied', date: 'Oct 16' }]
    },
    {
        id: '7164d227', company: 'Kestrel Systems', position: 'Junior Full-Stack Dev', workMode: 'Hybrid', history: [
            { statusId: 'applied', date: 'Oct 14' }]
    },
    {
        id: '6052e581', company: 'Vantage Labs', position: 'Frontend Intern', workMode: 'Remote', history: [
            { statusId: 'applied', date: 'Oct 21' }]
    },
    {
        id: 'cd43719a', company: 'Pinecone Digital', position: 'Junior React Developer', workMode: 'Hybrid', history: [
            { statusId: 'applied', date: 'Oct 22' }]
    },
    {
        id: 'afcba5a8', company: 'Harbor & Co', position: 'Web Developer', workMode: 'On-site', history: [
            { statusId: 'applied', date: 'Oct 25' }]
    },

    {
        id: 'e507cd58', company: 'Fieldnote', position: 'Laravel Developer Intern', workMode: 'Hybrid', history: [
            { statusId: 'applied', date: 'Oct 10' }, { statusId: 'interview', date: 'Oct 22', label: 'HR call' }]
    },
    {
        id: '365e0ab8', company: 'Copperline', position: 'Full-Stack Intern', workMode: 'Remote', history: [
            { statusId: 'applied', date: 'Oct 12' }, { statusId: 'interview', date: 'Oct 27', label: 'Take-home' }]
    },
    {
        id: '32a47f04', company: 'Orbit Health', position: 'React Intern', workMode: 'Remote', history: [
            { statusId: 'applied', date: 'Oct 18' }, { statusId: 'interview', date: 'Oct 24', label: 'HR call' },
            { statusId: 'interview', date: 'Oct 30', label: 'Tech' }]
    },
    {
        id: '3ef908cb', company: 'Quillworks', position: 'Software Engineer Intern', workMode: 'Hybrid', history: [
            { statusId: 'applied', date: 'Oct 8' }, { statusId: 'interview', date: 'Oct 15', label: 'HR call' },
            { statusId: 'interview', date: 'Oct 23', label: 'Tech' }, { statusId: 'interview', date: 'Oct 31', label: 'Final' }]
    },

    {
        id: '97772059', company: 'Northbeam', position: 'Web Developer Intern', workMode: 'On-site', history: [
            { statusId: 'applied', date: 'Oct 2' }, { statusId: 'interview', date: 'Oct 12', label: 'Tech' },
            { statusId: 'offer', date: 'Nov 5', label: 'Reply by' }]
    },
    {
        id: 'aa179447', company: 'Lumen Works', position: 'Junior Developer', workMode: 'Remote', history: [
            { statusId: 'applied', date: 'Oct 4' }, { statusId: 'offer', date: 'Nov 12', label: 'Reply by' }]
    },
    {
        id: '19fd0a8c', company: 'Glasshouse', position: 'Frontend Developer', workMode: 'Hybrid', history: [
            { statusId: 'applied', date: 'Oct 6' }, { statusId: 'interview', date: 'Oct 14', label: 'HR call' },
            { statusId: 'offer', date: 'Oct 28', label: 'Offer' }]
    },

    {
        id: '3a8c0573', company: 'Halcyon Co', position: 'Frontend Intern', workMode: 'Hybrid', history: [
            { statusId: 'applied', date: 'Oct 1' }, { statusId: 'rejected', date: 'Oct 12', label: 'Closed' }]
    },
    {
        id: '68d76a74', company: 'Brightwave', position: 'Backend Intern', workMode: 'On-site', history: [
            { statusId: 'applied', date: 'Oct 3' }, { statusId: 'interview', date: 'Oct 7', label: 'HR call' },
            { statusId: 'rejected', date: 'Oct 9', label: 'Closed' }]
    },
    {
        id: '05310908', company: 'Tessellate', position: 'Full-Stack Intern', workMode: 'Remote', history: [
            { statusId: 'applied', date: 'Oct 5' }, { statusId: 'rejected', date: 'Oct 11' }]
    },
]