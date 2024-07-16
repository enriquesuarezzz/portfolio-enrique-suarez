import { OnestText } from '@/components/atoms/onest_text'
import LightBulb from '@/components/atoms/svg/lightbulb'
import Image from 'next/image'
import Button from '../button/button'

export default function Proyects() {
  const proyects = [
    {
      image: '/images/mumbai.avif',
      title: 'Marketec 360',
      description: 'Aplicacion web para el manejo de inventario',
    },
  ]
  return (
    <section className="pt-10 md:pt-20">
      {/* section title */}
      <div className="flex items-center justify-center gap-4 pb-8 md:justify-start">
        {/* lightbulb icon */}
        <LightBulb />
        <OnestText
          text="Proyectos"
          style="bold"
          fontSize="36px"
          className="text-white"
        />
      </div>
      {/* cards */}
      <div className="grid grid-cols-2 gap-20">
        {proyects.map(({ image, title, description }) => (
          <div
            key={title}
            className="relative flex h-full max-h-[500px] max-w-[500px] flex-col items-center justify-center rounded-3xl border border-gray-400 bg-gradient-to-r from-gray-800 to-gray-900 shadow-2xl"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGES_PATH + image}`}
              width={500}
              height={300}
              alt="Project"
              className="h-auto w-full rounded-2xl object-cover px-10 pt-4"
            />
            <div className="px-6 py-4">
              <OnestText
                text={title}
                style="bold"
                fontSize="18px"
                className="pt-4 text-center text-2xl font-bold text-white"
              />
              <OnestText
                text={description}
                style="bold"
                fontSize="16px"
                className="px-4 pt-2 text-center text-sm text-gray-300"
              />
            </div>
            <div className="mb-6 mt-4">
              <Button
                text="Ver proyecto"
                href="https://marketec360.com/"
                className="from-primary to-secondary transform rounded-full bg-gradient-to-r px-6 py-2 font-semibold text-white transition-transform hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
