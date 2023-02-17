import { Logo } from "../logo"
import { ButtonLink } from "../buttonLink"
export function HeaderHome() {
  return (
    <header className="p-4 min-w-full flex items-center justify-between">
        <Logo  />
        <ButtonLink url="/login" text="Entrar" />
    </header>
  )
}