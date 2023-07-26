import './globals.css'
import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import { Footer, Navbar } from './component/component.exports'
import { useRouter } from 'next/router'
import useNavigation from 'next/navigation';

const inter =Mulish({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MathIQr',
  description: 'Math learning app',
}

export default function RootLayout({
  children,showNavbarAndFooter 
}: {
  children: React.ReactNode,showNavbarAndFooter :boolean
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
          {showNavbarAndFooter  && <Navbar />}
            {children}
          {showNavbarAndFooter  && <Footer />}
        </body>
    </html>
  )
}
