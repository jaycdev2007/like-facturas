"use client"
import { useState } from "react"
import { Eye,EyeClosed} from "phosphor-react"
import Link from "next/link"

interface IInputTypes {
    typeInput: string;
    placeholder: string;
    fun: (e:string) => void;
    error?: string;
}
export function Input({ typeInput,placeholder,fun,error}: IInputTypes) {
    const [text,setText] = useState("")
    const [isVisible,setIsVisible] = useState(false)
    return (
        <>
        <input type={typeInput == "password" && isVisible == true ? "text" : typeInput} value={text} placeholder={placeholder} onChange={(e) => {
            setText(e.target.value)
            fun(e.target.value)
        }} className="bg-black-700 outline-none border-0 border-b-2 border-white py-4" />
        
        <div>
            {typeInput == "password" ? ( 
            <div className="flex justify-between">
                <div className="text-xs font-light underline hover:no-underline">
                    Esquece a minha palavra passe
                </div>
            <span 
        onClick={() => {
            setIsVisible(isVisible == true ? false : true)
        }}>
            { isVisible == true ? <Eye size={32} /> : <EyeClosed size={32} />}
        </span>
         </div> )
        : null}
        {error && <Link href="#" className="text-red-500 font-light text-sm">{error}</Link>}
        </div>
        </>
    )
}