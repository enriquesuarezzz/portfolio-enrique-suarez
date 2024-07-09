import Image from 'next/image'
import { Metadata } from 'next'
import { OnestText } from '@/components/atoms/onest_text'
import Button from '@/components/molecules/button/button'
import SectionLayout from '@/components/atoms/section_layout'
import Linkedin from '@/components/atoms/svg/linkedin'
import Mail from '@/components/atoms/svg/mail'
import Github from '@/components/atoms/svg/github'
import Download from '@/components/atoms/svg/download'

export const metadata: Metadata = {
  title: '<> Portfolio Enrique Suarez</>',
  description: 'Portfolio de Enrique Suarez',
}
export default function Home() {
  return (
    <main className="flex flex-col">
      <SectionLayout>
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
              text="Bienvenido a mi pequeño rinconcito, <span class='text-orange'> soy técnico superior de Desarrollo De Aplicaciones web </span>, y me encantaría unirme a tu equipo de trabajo y aportar mi granito de arena :)"
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
            <div className="flex gap-10 pt-10">
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
              >
                <Linkedin />
              </Button>
              <Button
                text="Github"
                href="https://www.github.com/enriquesuarezzz"
                rel="noopener noreferrer"
              >
                <Github />
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6">
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/a.jpg'}`}
              alt="Enrique Suarez"
              width={220}
              height={50}
              unoptimized
              className="rounded-full"
            />
            <Button
              text="Descarga mi Curriculum"
              href="/pdf/CV_enrique_suarez_martin_.pdf"
              rel="noopener noreferrer"
            >
              <Download />
            </Button>
          </div>
        </header>
      </SectionLayout>
    </main>
  )
}
