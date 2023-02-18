import "../../styles/globals.css"

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head />
       <body className="bg-black-700 text-white">{children}</body>
    </html>
  )
}