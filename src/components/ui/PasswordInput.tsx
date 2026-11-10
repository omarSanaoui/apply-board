'use client'
import { useState } from "react";
import Input from "./Input";
import { Eye, EyeOff } from "lucide-react";
import Button from "./Button";

export default function PasswordInput({...rest}: React.ComponentProps<typeof Input>) {
    const [visibility, setVisibility] = useState(false)
    function toggleVisibility(){
        setVisibility(prev => !prev)
    }
    const inputType = visibility ? 'text' : 'password'
    const trailingIcon = visibility ? <EyeOff  size={20}/> : <Eye  size={20}/>
  return (
    <div>
      <Input {...rest} type={inputType} trailing={<Button onClick={toggleVisibility} variant="plain" size="sm"  aria-label={visibility ? 'Hide password' : 'Show password'}>{trailingIcon}</Button>}  />
    </div>
  )
}
