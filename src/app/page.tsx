import Image from 'next/image'
import { Metadata } from 'next'
import { OnestText } from '@/components/atoms/onest_text'
import Navbar from '@/components/molecules/navbar/navbar'

export const metadata: Metadata = {
  title: '<> Portfolio Enrique Suarez</>',
  description: 'Portfolio de Enrique Suarez',
}
export default function Home() {
  return (
    <main>
      <Navbar />
      {/* <header>
        <div className="flex">
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
      </header> */}
    </main>
  )
}
