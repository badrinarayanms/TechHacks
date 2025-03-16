import type { Metadata } from 'next'
import './globals.css'
import thlogo from '@/public/techhacks.png'

export const metadata: Metadata = {
  title: 'TechHacks 2025 | The Ultimate Coding Challenge'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={thlogo.src} />
      </head>
      <body>{children}</body>
    </html>
  )
}
