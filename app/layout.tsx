import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import '../app/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Crypto-Powered Coverage for Online Learning',
  description: 'Protect your online learning investment with crypto-powered coverage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.className} bg-[#f9f9f9] text-base`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

