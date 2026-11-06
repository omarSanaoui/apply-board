import React from "react"

type Variant = 'primary' | 'secondary'
type Size = 'sm' | 'md'

interface ButtonProps extends React.ComponentProps<'button'> {
    variant?: Variant
    size?: Size
}
const variantStyles: Record<Variant, string> = {
    primary: 'bg-accent text-on-accent enabled:hover:bg-accent/75 transition-colors duration-300',
    secondary: 'bg-surface text-muted-text border border-border enabled:hover:border-muted-text transition-colors duration-300'
}
const sizingStyles: Record<Size, string> = {
    md: 'px-7 py-3 text-[17px] rounded-xl',
    sm: 'px-3.5 py-2 text-sm rounded-lg',
}

export default function Button({ variant = 'primary', size = 'md', children, type = 'button', ...rest }: ButtonProps) {
    const variantStyle = variantStyles[variant]
    const sizingStyle = sizingStyles[size]
    return (
        <button {...rest} type={type} className={`inline-flex items-center justify-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed ${variantStyle} ${sizingStyle}`}>{children}</button>
    )
}