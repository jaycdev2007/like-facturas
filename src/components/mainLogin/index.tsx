"use client"
import { useState } from "react"
import { Button } from "../button"
import { Input } from "../input"
import { onFileSelected } from "../uploadFile"
import { FileArrowUp } from "phosphor-react"

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
                <p className="text-center text-xs font-light max-w-[70%]">
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

                <div className="underline hover:no-underline font-light" onClick={() => {
                  setIsLogin(false)
                }}>
                  Criar conta
                </div>
              </form>
              </>
            ) : (
              <>
                <div className="flex flex-col gap-3 items-center">
                  <h1 className="text-3xl font-light text-center p-4 ">LIKE FACTURAS</h1>
                  <p className="text-center text-xs font-light max-w-[70%]">
                    Faça o cadastro agora para poder fazer faturas em menos de 5 minutos
                  </p>
                </div>
                <form className="flex flex-col  gap-4">
                  <div className="flex flex-col gap-2">
                  <Input typeInput="email" placeholder="Email" fun={(e) => {
                    
                  }} />
                   <Input typeInput="password" placeholder="Palavra passe" fun={(e) => {
                    
                  }} />
                  <h2 className="text-xl font-light">Informações da Empresa</h2>

                  <Input typeInput="text" placeholder="Nome da empresa" fun={(e) => {
                    
                  }} />
                  <Input typeInput="tel" placeholder="Número de telefone da empresa" fun={(e) => {
                    
                  }} />
                  <Input typeInput="email" placeholder="Email da empresa" fun={(e) => {
                    
                  }} />
                  <Input typeInput="text" placeholder="localização da empresa" fun={(e) => {
                    
                  }} />
                  <Input typeInput="text" placeholder="NIF da empresa" fun={(e) => {
                    
                  }} />
                 <Input typeInput="text" placeholder="IBAN da empresa" fun={(e) => {
                    
                  }} />
                  <Input typeInput="text" placeholder="Número da conta bancária da empresa" fun={(e) => {
                    
                  }} />
                  <div>
                  <h2 className="font-light">Logotipo da empresa</h2>
                  <label htmlFor="file" className="block my-4">
                  <FileArrowUp size={64} className="p-2 hover:bg-blue-700 rounded-lg"/>
                  </label>
                  <input type="file" id="file" className="hidden" onChange={async(e) => {
                     const file = await onFileSelected(e)
                     console.log(file)
                     }}/>
                  </div>
                  </div>
                  <Button text="Criar Conta" fun={(e) => {

                  }} /> 
                  <div className="underline hover:no-underline font-light" onClick={() => {
                    setIsLogin(true)
                  }}>
                   Login
                  </div>
                </form>
              </>
            )
        }
      </main>
    
   )
} 
