import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Aayush Agnihotri',
  description: 'Aayush Agnihotri, software developer, student, open source contributor, entrepreneur',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/logo-light.png',
        href: '/images/logo-light.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/logo-dark.png',
        href: '/images/logo-dark.png',
      },
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
        <body className={`${outfit.variable} font-sans`}>
          <Providers>
          {children}
          </Providers>
        </body>
    </html>
  )
}
