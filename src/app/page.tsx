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
      <header>
        <div className="flex items-center gap-4">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/header_image.avif'}`}
            alt="Enrique Suarez"
            width={200}
            height={200}
            className="rounded-full"
          />
          <OnestText
            tag="h1"
            text="Enrique Suarez"
            style="bold"
            fontSize="64px"
            className="text-white"
          />
        </div>
      </header>
    </main>
  )
}
