'use client'
import { Moon, Sun } from "lucide-react"
import {useEffect, useState } from "react"

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        const initialValue = document.documentElement.dataset.theme
        return initialValue || 'dark'
    })

    useEffect(() => {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const OStheme = isDark ? 'dark' : 'light'
        const resolvedTheme = localStorage.getItem('theme') || OStheme
        setTheme(resolvedTheme)
    }, [])

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    function toggleTheme() {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }
    const toggleAnimation = theme === 'dark' ? 'translate-x-[38px]' : 'translate-x-[0px]'
    return (
        <button
            className="relative w-auto flex items-center bg-background rounded-4xl border-2 border-border"
            onClick={toggleTheme}>
            <div className={`absolute mx-[7px] w-[36px] h-[36px] bg-border rounded-4xl ${toggleAnimation} transition-transform ease-out duration-500`} />
            <div className="relative gap-4 m-[8px] mx-[14px] flex justify-around items-center">
                <Sun size={22} className={`${theme === 'light' ? 'text-text' : 'text-muted-text'} transition-colors duration-500`} />
                <Moon size={22} className={`${theme === 'dark' ? 'text-text' : 'text-muted-text'} transition-colors duration-500`} />
            </div>
        </button>
    )
}