import Image from 'next/image'
import { HomePages } from './component/component.exports'
import RootLayout from './layout'

export default function Home() {
  return (
      <RootLayout showNavbarAndFooter={true}>
          <HomePages/>
      </RootLayout>
  )
}
