"use client"
import { useState } from "react"
import { Button } from "../button"
import { Input } from "../input"

export function MainLogin() 
{
  const [isLogin,setIsLogin] = useState(true)
  return (
      <main className="min-h-[80vh] flex flex-col items-center justify-center gap-6 md:gap-12">
        {
            isLogin == true ? (
              <>
              <div className="flex flex-col gap-3 items-center">
                <h1 className="text-3xl font-light text-center p-4 ">LIKE FACTURAS</h1>
                <p className="text-center text-xs font-light max-w-[90%]">
                  Faça login agora para poder fazer faturas em menos de 5 minutos
                 </p>
              </div>
              <form className="flex flex-col itmes-center justify-center gap-4">
                <div className="flex flex-col gap-2">
                  <Input typeInput="email" placeholder="Email" fun={(e) => {
                    
                  }} />
                   <Input typeInput="password" placeholder="Palavra passe" fun={(e) => {
                    
                  }} />
                </div>
                <Button text="Entrar" fun={(e) => {
                  
                }} />
              </form>
              </>
            ) : (
              <form></form>
            )
        }
      </main>
    
   )
} 
