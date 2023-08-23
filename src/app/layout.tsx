import { AuthProvider, FooterComponent, LoadingComponent, NavbarComponent } from '@/component/component.export'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import { Suspense} from 'react'


const robotoMono = Roboto_Mono({ 
  weight:'500',subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MathIQr',
  description: 'Math Learning App',
}
export default  function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <AuthProvider>
      <html lang="en">
        <body className={robotoMono.className}>
          <NavbarComponent/>
            <Suspense fallback={<LoadingComponent/>}>{children}</Suspense>
          <FooterComponent/>
        </body>
      </html>
    </AuthProvider>
  )
}
