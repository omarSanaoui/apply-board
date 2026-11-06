import React from "react";

export default function Logo({className, ...rest}:React.ComponentProps<'svg'>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="43" height="34" {...rest} className={`${className ?? ''} fill-accent`} viewBox="11 15 43 34" role="img" aria-label="apply-board">
            <rect x="12" y="16" width="10" height="32" rx="3" />
            <rect x="27" y="26" width="10" height="22" rx="3" fillOpacity="0.72" />
            <rect x="42" y="38" width="10" height="10" rx="3" fillOpacity="0.48" />
            <rect x="42" y="21" width="10" height="9" rx="2.5" transform="rotate(-14 47 25.5)" />
        </svg>
    )
}