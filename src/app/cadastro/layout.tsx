export default function CadastroLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
      <title>Faça já o seu cadastro</title>
      </head>
      <body className="bg-black-700 text-white">{children}</body>
    </html>
  )
}