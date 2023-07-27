import './globals.css'
import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import { Footer, Navbar } from './component/component.exports'


const inter =Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MathIQr',
  description: 'Math learning app',
}

export default function RootLayout({
  children 
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar/>
            {children}
          <Footer />
        </body>
    </html>
  )
}
