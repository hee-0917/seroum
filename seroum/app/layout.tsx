import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SEROUM',
  description: 'SEROUM 공식 웹사이트',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
