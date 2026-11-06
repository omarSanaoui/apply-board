import Link from "next/link"
import React from "react"

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md'

interface ButtonLinkProps extends React.ComponentProps<typeof Link> {
    variant?: Variant
    size?: Size
}
const variantStyles: Record<Variant, string> = {
    primary: 'bg-accent text-on-accent hover:bg-accent/75 transition-colors duration-300',
    secondary: 'bg-surface text-muted-text border border-border hover:border-muted-text transition-colors duration-300',
    ghost: 'text-muted-text hover:text-text transition-colors duration-300',
}

const sizingStyles: Record<Size, string> = {
    md: 'px-7 py-3 text-[17px] rounded-xl',
    sm: 'px-3.5 py-2 text-sm rounded-lg',
}
export default function ButtonLink({ variant = 'ghost', size = 'md', children, ...rest }: ButtonLinkProps) {
    const variantStyle = variantStyles[variant]
    const sizingStyle = sizingStyles[size]
    return (
        <Link {...rest} className={`inline-flex items-center justify-center gap-2 font-semibold ${variantStyle} ${sizingStyle}`}>{children}</Link>
    )
}