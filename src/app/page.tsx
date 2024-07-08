import Image from 'next/image'
import { Metadata } from 'next'
import { OnestText } from '@/components/atoms/onest_text'

export const metadata: Metadata = {
  title: 'Portfolio Enrique Suarez | Inicio',
  description: 'Portfolio Enrique Suarez',
}
export default function Home() {
  return (
    <main>
      <header className="flex items-center justify-center gap-40 pt-40">
        <div className="flex max-w-[500px] flex-col items-center gap-6">
          <OnestText
            text="Hey, soy Enrique Suarez"
            tag="h1"
            style="bold"
            fontSize="64px"
            className="text-white"
          />
          <OnestText
            text="Bienvenido a mi pequeño rinconcito, soy técnico superior de Desarrollo De Aplicaciones web, y me encantaría unirme a tu equipo de trabajo y aportar mi granito de arena :)"
            tag="h2"
            style="bold"
            fontSize="16px"
            className="text-white"
          />
          {/* <OnestText
            text={` <span class="text-red-600">if</span> (<span class="text-purple-600">stomago.status</span> <span class="text-red-600"> == </span>  <span class="text-yellow-600">"vacio"</span> ) { </br> <span class="text-green-500"> compraPizza </span> (); </br> } <span class="text-red-600" >else</span>  { </br> <span class="text-green-500">continuaProgramando</span>(); </br> }`}
            style="bold"
            fontSize="24px"
            className="text-white"
          /> */}
        </div>
        <div>
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/a.jpg'}`}
            alt="Enrique Suarez"
            width={300}
            height={50}
            unoptimized
            className="rounded-full"
          />
        </div>
      </header>
    </main>
  )
}
