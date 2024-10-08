import Image from 'next/image'
import { Metadata, ResolvingMetadata } from 'next'
import { OnestText } from '@/components/atoms/onest_text'
import Button from '@/components/molecules/button/button'
import SectionLayout from '@/components/atoms/section_layout/section_layout'
import Linkedin from '@/components/atoms/svg/linkedin'
import Github from '@/components/atoms/svg/github'
import Download from '@/components/atoms/svg/download'
import Experience from '@/components/molecules/experience/experience'
import Skills from '@/components/molecules/skills/skills'
import Proyects from '@/components/molecules/proyects/proyects'
import { GeneralProps } from '@/interfaces/lang-props'
import { getDictionary } from './dictionaries'

export async function generateMetadata(
  { params: { lang } }: GeneralProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const dict = await getDictionary(lang)

  return {
    title: `${dict.metadata.title}`,
    description: `${dict.metadata.description}`,
    openGraph: {
      title: `${dict.metadata.title}`,
      description: `${dict.metadata.description}`,
      url: 'https://www.enriquesuarez.dev',
      siteName: `${dict.metadata.title}`,
      images: [
        {
          url: 'https://www.enriquesuarez.dev/images/header_image.avif',
          width: 800,
          height: 600,
        },
      ],
    },
  }
}
export default async function Home({ params: { lang } }: GeneralProps) {
  const dict = await getDictionary(lang)
  return (
    <main className="flex flex-col">
      <SectionLayout>
        {/* headerSection */}
        <header className="flex items-center justify-center gap-10 pt-16 md:gap-24 md:pt-24 lg:gap-40 lg:pt-40">
          {/* main title */}
          <div className="flex w-full max-w-[450px] flex-col items-center justify-center gap-6 md:max-w-[600px]">
            <div className="flex items-center gap-4 md:items-start">
              <OnestText
                text={dict.header.title}
                tag="h1"
                style="bold"
                fontSize="52px"
                className="text-white"
              />
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/header_image.avif'}`}
                alt="Enrique Suarez Image"
                width={100}
                height={20}
                unoptimized
                className="block rounded-full md:hidden"
              />
            </div>
            {/* description */}
            <OnestText
              text={dict.header.description}
              tag="h2"
              style="bold"
              fontSize="16px"
              className="text-white"
            />
            {/* buttons */}
            <div className="grid w-full grid-cols-2 pt-4 md:flex md:gap-4 lg:pt-10">
              {/* linkedin button */}
              <Button
                text="Linkedin"
                href="https://www.linkedin.com/in/enrique-suarezzz"
                rel="noopener noreferrer"
                className=""
              >
                <Linkedin />
              </Button>
              {/* github button */}
              <Button
                text="Github"
                href="https://www.github.com/enriquesuarezzz"
                rel="noopener noreferrer"
                className=""
              >
                <Github />
              </Button>
              {/* download cv button */}
              <Button
                text={dict.header.cv_button}
                href="/pdf/enrique_suarez_english.pdf"
                rel="noopener noreferrer"
                className="mt-4 text-nowrap md:ml-0 md:mt-0"
              >
                <Download />
              </Button>
            </div>
          </div>
          {/* image */}
          <div className="hidden pb-0 md:flex md:pb-20 lg:pb-16">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/header_image.avif'}`}
              alt="Enrique Suarez Image"
              width={200}
              height={50}
              unoptimized
              className="rounded-full"
            />
          </div>
        </header>
        {/* experience section */}
        <Experience dict={dict} />
        {/* skills section */}
        <Skills dict={dict} />
        {/* proyects section */}
        <Proyects dict={dict} />
      </SectionLayout>
    </main>
  )
}
