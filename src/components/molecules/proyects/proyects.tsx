import { OnestText } from '@/components/atoms/onest_text'
import LightBulb from '@/components/atoms/svg/lightbulb'
import Image from 'next/image'
import Button from '../button/button'
import Github from '@/components/atoms/svg/github'
import { LangProps } from '@/interfaces/lang-props'

export default function Proyects({ dict }: LangProps) {
  const proyects = [
    {
      image: '/images/depilacion_laser.avif',
      title: dict.proyects.depilacion_laser.title,
      description: dict.proyects.depilacion_laser.description,
      preview: 'https://depilacion-laser.vercel.app/',
      github: 'https://github.com/enriquesuarezzz/depilacion-laser/',
    },
    {
      image: '/images/movie_finder.avif',
      title: dict.proyects.movie_finder.title,
      description: dict.proyects.movie_finder.description,
      preview: 'https://movie-finder-two-beta.vercel.app/',
      github: 'https://github.com/enriquesuarezzz/movie-finder.git',
    },
  ]
  return (
    <section id="proyects" className="pt-10 md:pt-20">
      {/* section title */}
      <div className="flex items-center justify-center gap-4 pb-8 md:justify-start">
        {/* lightbulb icon */}
        <LightBulb />
        <OnestText
          text={dict.proyects.title}
          style="bold"
          fontSize="36px"
          className="text-white"
        />
      </div>
      {/* cards */}
      <div className="flex flex-col items-center justify-center gap-10 md:grid md:grid-cols-2 lg:gap-20">
        {proyects.map(({ image, title, description, preview, github }) => (
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
            <div className="mb-6 flex gap-4">
              <Button
                text={dict.proyects.github_button}
                href={github}
                className="from-primary to-secondary mt-4 transform rounded-full bg-gradient-to-r px-6 py-2 font-semibold text-white transition-transform hover:scale-105"
                rel="noopener noreferrer"
              >
                <Github />
              </Button>

              <Button
                text={'Preview'}
                href={preview}
                className="from-primary to-secondary mt-4 transform rounded-full bg-gradient-to-r px-6 py-2 font-semibold text-white transition-transform hover:scale-105"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
