import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Hilal Towing Service - Roadside Assistance Sharjah & Dubai',
    template: '%s | Hilal Towing Service'
  },
  description: 'Breakdown Recovery, Accident Recovery, Towing, Fuel Delivery, JumpStart and Roadside Assistance in Sharjah and Dubai. Call 055 134 8899.',
  keywords: 'Towing, Sharjah, Dubai, Breakdown Recovery, Accident Recovery, Fuel Delivery, JumpStart, Roadside Assistance',
  authors: [{ name: 'Hilal Towing' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FF6B35',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  )
}