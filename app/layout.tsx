import type { Metadata } from 'next'
import { Space_Grotesk, Inter, Anton } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Girish Skandha Sudhakar',
  description: 'Computer Engineering Student | Language Developer | Full-Stack Engineer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${inter.variable} ${anton.variable} ${GeistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=chillax@300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=stardom@400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/stardom"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
