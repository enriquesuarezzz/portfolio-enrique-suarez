import Image from 'next/image'
import { Metadata } from 'next'
import { OnestText } from '@/components/atoms/onest_text'
import Button from '@/components/molecules/button/button'
import SectionLayout from '@/components/atoms/section_layout/section_layout'
import Linkedin from '@/components/atoms/svg/linkedin'
import Github from '@/components/atoms/svg/github'
import Download from '@/components/atoms/svg/download'
import Experience from '@/components/molecules/experience/experience'
import Skills from '@/components/molecules/skills/skills'
import Proyects from '@/components/molecules/proyects/proyects'

export const metadata: Metadata = {
  title: '<> Portfolio Enrique Suarez</>',
  description: 'Portfolio de Enrique Suarez',
}
export default function Home() {
  return (
    <main className="flex flex-col">
      <SectionLayout>
        {/* headerSection */}
        <header className="flex items-center justify-center gap-10 pt-16 md:gap-24 md:pt-24 lg:gap-40 lg:pt-40">
          {/* main title */}
          <div className="flex w-full max-w-[450px] flex-col items-center justify-center gap-6 md:max-w-[600px]">
            <div className="flex items-center gap-4 md:items-start">
              <OnestText
                text="Hey, soy Enrique Suarez"
                tag="h1"
                style="bold"
                fontSize="52px"
                className="text-white"
              />
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/header_image.avif'}`}
                alt="Enrique Suarez"
                width={100}
                height={20}
                unoptimized
                className="block rounded-full md:hidden"
              />
            </div>
            {/* description */}
            <OnestText
              text="Bienvenido a mi pequeño rinconcito, <span class='text-orange'> soy técnico superior de Desarrollo De Aplicaciones web </span>, y me encantaría unirme a tu equipo de trabajo y aportar mi granito de arena :)"
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
                text="Descargar CV"
                href="/pdf/CV_enrique_suarez_martin_.pdf"
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
              alt="Enrique Suarez"
              width={200}
              height={50}
              unoptimized
              className="rounded-full"
            />
          </div>
        </header>
        {/* experience section */}
        <Experience />
        {/* skills section */}
        <Skills />
        {/* proyects section */}
        <Proyects />
      </SectionLayout>
    </main>
  )
}
