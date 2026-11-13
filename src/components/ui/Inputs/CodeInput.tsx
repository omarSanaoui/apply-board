'use client'
import { useRef, useState } from "react";

interface CodeInputProps{
    onComplete: (code: string) => void
    length?: number
}

export default function CodeInput({onComplete, length = 6}:CodeInputProps) {
    const [cells, setCells] = useState<string[]>(Array(length).fill(''))
    const inputs = useRef<(HTMLInputElement | null)[]>([])

    function updateCells(array: Array<string>){
        setCells(array)
        const code = array.join('')
        if(code.length === length){
            onComplete(code)
        }
    }

    function onChange(index: number, event: React.ChangeEvent<HTMLInputElement>) {
        const newCells = [...cells]
        const rawCell = event.currentTarget.value
        const cleanCell = rawCell.replace(/\D/g, '')
        const cell = cleanCell.at(-1) ?? ''
        const digits = cleanCell.slice(0, length)

        if (digits.length === length) {
            updateCells(digits.split(''))
            inputs.current.at(-1)?.focus()
            return
        }

        if (digits.length > 1) {
            const fitting = digits.slice(0, length - index)
            fitting.split('').forEach((digit, i) => {
                newCells[index + i] = digit
            })
            updateCells(newCells)
            inputs.current[index + fitting.length - 1]?.focus()
            return
        }

        newCells[index] = cell
        updateCells(newCells)
        if (cell && !(/\D/).test(rawCell)) inputs.current[index + 1]?.focus()


    }
    function onKeyPress(index: number, event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Backspace' && cells[index] === '') {
            event.preventDefault()
            if (index > 0) {
                const newCells = [...cells]
                newCells[index - 1] = ''
                updateCells(newCells)
                inputs.current[index - 1]?.focus()     
            }

        }

        if (event.key === 'ArrowLeft') {
            event.preventDefault()
            inputs.current[index - 1]?.focus()
        }

        if (event.key === 'ArrowRight') {
            event.preventDefault()
            inputs.current[index + 1]?.focus()
        }
    }
    return (
        <div className="flex gap-2.5">
            {Array.from({ length }).map((_, index) => (
                <input
                    key={index}
                    ref={el => { inputs.current[index] = el }}
                    className="w-13 h-15 border border-input-border rounded-xl text-center text-lg focus:border-focus focus:ring-3 focus:ring-focus-ring focus-visible:outline-none"
                    type="text"
                    inputMode="numeric"
                    value={cells[index]}
                    onChange={e => onChange(index, e)}
                    onKeyDown={e => onKeyPress(index, e)}
                    onFocus={() => { inputs.current[index]?.select() }}
                    autoComplete={index === 0 ? 'one-time-code' : 'off'}
                />
            )
            )}
        </div>
    )
}
