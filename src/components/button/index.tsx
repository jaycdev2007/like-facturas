import { FormEvent } from "react"

interface IButtonTypes {
    text: string;
    fun: (el: FormEvent) => void
}

export function Button({text,fun}: IButtonTypes) {
    return (
        <button className="bg-blue-700 py-2 px-4 hover:bg-black-700 transition-500 rounded-lg text-center" 
        onClick={(e) => fun(e)}>
            {text}
        </button>
    )
}