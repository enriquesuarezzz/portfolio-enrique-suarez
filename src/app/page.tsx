import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio Enrique Suarez | Inicio',
  description: 'Portfolio Enrique Suarez',
}
export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline"> Home Page</h1>
    </main>
  )
}
