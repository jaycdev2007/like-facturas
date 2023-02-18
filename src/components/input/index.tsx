"use client"
import { useState } from "react"
import { Eye,EyeClosed} from "phosphor-react"

interface IInputTypes {
    typeInput: string;
    placeholder: string;
    fun: (e:string) => void;
}
export function Input({ typeInput,placeholder,fun}: IInputTypes) {
    const [text,setText] = useState("")
    const [isVisible,setIsVisible] = useState(false)
    return (
        <>
        <input type={typeInput == "password" && isVisible == true ? "text" : typeInput} value={text} placeholder={placeholder} onChange={(e) => {
            setText(e.target.value)
            fun(e.target.value)
        }} className="bg-black-700 outline-none border-0 border-b-2 border-white py-4" />{typeInput == "password" ? <span 
        onClick={() => {
            setIsVisible(isVisible == true ? false : true)
        }}
        >
            { isVisible == true ? <Eye size={32} /> : <EyeClosed size={32} />}
        </span> : null}
        </>
    )
}