import React, { useId } from "react";
import { CircleAlert } from 'lucide-react';

interface InputProps extends React.ComponentProps<'input'> {
  label?: string,
  hint?: string,
  error?: string
}

export default function Input({ label, hint, error, ...rest }: InputProps) {
  const id = useId()
  return (
    <div className='flex flex-col gap-2'>
      {label && <label htmlFor={id} className="font-medium text-base">{label}</label>}
      <input {...rest} id={id} className={`h-11 px-3.5 bg-background rounded-[10px] text-[15px] border ${error ? 'border-danger focus:border-danger focus:ring-3 focus:ring-danger/35' : 'border-input-border hover:border-border-hover focus:border-focus focus:ring-3 focus:ring-focus-ring'}  placeholder:text-placeholder focus-visible:outline-none`} aria-invalid={!!error} aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}/>
      {hint && !error && <span id={`${id}-hint`} className='text-[13px] text-muted-text'>{hint}</span>}
      {error && <span id={`${id}-error`} className='flex items-center gap-1 text-[13px] text-danger' role="alert"><CircleAlert size={13} />{error}</span>}
    </div>
  )
}
