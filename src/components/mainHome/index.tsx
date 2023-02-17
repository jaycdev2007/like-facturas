import { ButtonLink } from "../buttonLink"
import svg1 from "../../assests/svg1.svg"
import svg2 from "../../assests/svg2.svg"

export function MainHome() {
  return (
  <main className="min-h-[80vh] p-4">
    <div className="min-w-full flex flex-col gap-8 justify-center">
      <h1 className="text-3xl font-light text-center">
        Faturas em menos de 5 minutos
      </h1>
      <div className="flex justify-center">
          <ButtonLink url="/login" text="Experimente já 30 dias grátis" className="w-[250px] "/>
       </div>
    </div>
    <section className="mt-2 flex flex-col-reverse justify-between md:flex-row md:gap-4 md:mt-12">
      <p className="font-light mt-6">
          Bem-vindo ao Like Faturas,
          onde fazer faturas nunca foi
          tão fácil e eficiente.
          Com a nossa plataforma online,
          você pode criar, enviar e gerenciar
          suas faturas com apenas alguns
          cliques. Não perca tempo com
          processos manuais cansativos
          e complexos. Junte-se a nós hoje
          e experimente a facilidade de
          fazer faturas de forma rápida
          e segura.
      </p>
      <img src={svg1.src} className="md:w-2/4 h-[300px]"/>
     
    </section>
    <section className="mt-2 flex flex-col-reverse justify-between md:flex-row md:gap-4 md:mt-12">
      <div>
      <h2 className="text-2xl font-light">O que oferecemos</h2>
      <ul className="mt-6 flex flex-col">
        <li>
          <h3 className="font-bold">1-Modelos de fatura personalizáveis:</h3>
          <p className="text-sm p-3">
            capacidade de criar modelos de
            fatura que reflitam sua marca,
            incluindo logotipos, cores e informações
            de contato.
          </p>
        </li>
        <li>
           <h3 className="font-bold">2-Geração automática de facturas:</h3>
          <p className="text-sm p-3">
            capacidade de criar facturas de forma 
            rápida e precisa, sem a necessidade de 
            inserção manual de informações
          </p>
        </li>
        <li>
           <h3 className="font-bold">3-Envio de facturas por e-mail:</h3>
          <p className="text-sm p-3">
            permitindo enviar facturas diretamente
           para os clientes com um simples clique.
          </p>
        </li>
        <li>
           <h3 className="font-bold">4-Armazenamento de facturas em nuvem:</h3>
          <p className="text-sm p-3">
              permitindo acesso a facturas a qualquer
             momento, de qualquer lugar, sem 
            preocupações com perda de dados.
          </p>
        </li>
      </ul>
     </div>
      <img src={svg2.src} className="md:w-2/4"/>
    </section>
    <section className="flex flex-col items-center gap-8 justify-center">
      <ButtonLink url="/login" text="Experimente já 30 dias grátis" className="w-[250px] "/>
      <p className="font-light">
        Entre no nosso youtube para 
        ver os nossos videos que 
        ensimam-te a mexer na nossa
        plataforna 
      </p>
    </section>
  </main>
  )
}