export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
      <title>Faça já o seu login</title>
      </head>
      <body className="bg-black-700 text-white">{children}</body>
    </html>
  )
}