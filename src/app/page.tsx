import Image from 'next/image'
import { Metadata } from 'next'
import { OnestText } from '@/components/atoms/onest_text'
import Button from '@/components/molecules/button/button'
import SectionLayout from '@/components/atoms/section_layout'
import Linkedin from '@/components/atoms/svg/linkedin'
import Mail from '@/components/atoms/svg/mail'
import Github from '@/components/atoms/svg/github'
import Download from '@/components/atoms/svg/download'
import Experience from '@/components/molecules/experience/experience'

export const metadata: Metadata = {
  title: '<> Portfolio Enrique Suarez</>',
  description: 'Portfolio de Enrique Suarez',
}
export default function Home() {
  return (
    <main className="flex flex-col">
      <SectionLayout>
        <header className="flex flex-col items-center justify-center gap-24 pt-24 md:flex-row lg:gap-40 lg:pt-40">
          <div className="flex w-full max-w-[375px] flex-col items-center justify-center gap-6 md:max-w-[500px]">
            <OnestText
              text="Hey, soy Enrique Suarez"
              tag="h1"
              style="bold"
              fontSize="52px"
              className="text-white"
            />
            <OnestText
              text="Bienvenido a mi pequeño rinconcito, <span class='text-orange'> soy técnico superior de Desarrollo De Aplicaciones web </span>, y me encantaría unirme a tu equipo de trabajo y aportar mi granito de arena :)"
              tag="h2"
              style="bold"
              fontSize="16px"
              className="text-white"
            />
            <div className="grid w-full grid-cols-2 pt-4 md:flex md:gap-4 lg:pt-10">
              <Button
                text="Contáctame"
                href="mailto:enriquesuarezmartin@gmail.com"
                rel="noopener noreferrer"
              >
                <Mail />
              </Button>
              <Button
                text="Linkedin"
                href="https://www.linkedin.com/in/enrique-suarezzz"
                rel="noopener noreferrer"
                className="ml-4 md:ml-0"
              >
                <Linkedin />
              </Button>
              <Button
                text="Github"
                href="https://www.github.com/enriquesuarezzz"
                rel="noopener noreferrer"
                className="mt-4 md:mt-0"
              >
                <Github />
              </Button>
              <Button
                text="Descargar CV"
                href="/pdf/CV_enrique_suarez_martin_.pdf"
                rel="noopener noreferrer"
                className="ml-4 mt-4 text-nowrap md:ml-0 md:mt-0"
              >
                <Download />
              </Button>
            </div>
          </div>

          <div className="flex pb-16">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/a.jpg'}`}
              alt="Enrique Suarez"
              width={220}
              height={50}
              unoptimized
              className="rounded-full"
            />
          </div>
        </header>
        <Experience />
      </SectionLayout>
    </main>
  )
}
