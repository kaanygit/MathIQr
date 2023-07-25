import Image from 'next/image'
import { HomePages } from './pages/pages.exports'

export default function Home() {
  return (
    <main className="flex w-full h-screen flex items-center justify-center p-20 bg-palette-1 mx-auto">
      <HomePages/>
    </main>
  )
}
