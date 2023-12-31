import { AuthProvider, FooterComponent, LoadingComponent, NavbarAuthentication, NavbarNotAuth } from '@/component/component.export'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import { Suspense} from 'react'

import { authOptions } from './api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { ProviderStore } from '@/redux/provider'


const robotoMono = Roboto_Mono({ 
  weight:'500',subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MathIQr',
  description: 'Math Learning App',
}
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session=await getServerSession(authOptions);
  return (
    <AuthProvider>
        <ProviderStore>
          <html lang="en">
            <body className={robotoMono.className}>
              {session?(
                        <>
                          <NavbarAuthentication/>
                          <Suspense fallback={<LoadingComponent/>}>{children}</Suspense>
                          <FooterComponent/>
                        </>
                    ):(
                        <>
                          <NavbarNotAuth/>
                          <Suspense fallback={<LoadingComponent/>}>{children}</Suspense>
                          <FooterComponent/>
                        </>
              )}
            </body>
          </html>
          </ProviderStore>
        </AuthProvider>
  )
}
