import { OnestText } from '@/components/atoms/onest_text'
import Image from 'next/image'
import Button from '../button/button'
import Github from '@/components/atoms/svg/github'
import { getTranslations } from 'next-intl/server'
import LightBulb from '@/components/atoms/svg/lightbulb'

export async function Proyects() {
  const t = await getTranslations('proyects')
  const proyects = [
    {
      image: '/images/depilacion_laser.avif',
      title: t('depilacion_laser.title'),
      description: t('depilacion_laser.description'),
      preview: 'https://depilacion-laser.vercel.app/',
      github: 'https://github.com/enriquesuarezzz/depilacion-laser/',
    },
    {
      image: '/images/dc_wine.avif',
      title: t('dc_wine.title'),
      description: t('dc_wine.description'),
      preview: 'https://dc-wine.vercel.app/es',
      github: 'https://github.com/enriquesuarezzz/dc-wine',
    },
    {
      image: '/images/sky_match.avif',
      title: t('sky_match.title'),
      description: t('sky_match.description'),
      preview: 'https://sky-match.vercel.app/',
      github: 'https://github.com/enriquesuarezzz/SkyMatch.git',
    },
    {
      image: '/images/sky_match_api.avif',
      title: t('sky_match_api.title'),
      description: t('sky_match_api.description'),
      preview: 'https://sky-match.vercel.app/',
      github: 'https://github.com/enriquesuarezzz/SkyMatch.git',
    },
  ]
  return (
    <section id="proyects" className="pt-10 md:pt-20">
      {/* section title */}
      <div className="flex items-center justify-center gap-4 pb-8 md:justify-start">
        {/* lightbulb icon */}
        <LightBulb />
        <OnestText style="bold" fontSize="32px" className="text-white">
          {t('title')}
        </OnestText>
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
            <div className="px-6 py-1">
              <OnestText
                style="bold"
                fontSize="19px"
                className="pt-4 text-center text-2xl font-bold text-white"
              >
                {title}
              </OnestText>
              <OnestText
                style="bold"
                fontSize="14px"
                className="px-4 pt-2 text-center text-sm text-gray-300"
              >
                {description}
              </OnestText>
            </div>
            <div className="mb-6 flex gap-4">
              <Button
                text={t('github_button')}
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
