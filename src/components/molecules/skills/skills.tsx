import { OnestText } from '@/components/atoms/onest_text'
import Css from '@/components/atoms/svg/skills/Css'
import Figma from '@/components/atoms/svg/skills/figma'
import Html from '@/components/atoms/svg/skills/html'
import Js from '@/components/atoms/svg/skills/js'
import MySQL from '@/components/atoms/svg/skills/mysql'
import NextJs from '@/components/atoms/svg/skills/nextjs'
import Php from '@/components/atoms/svg/skills/php'
import Python from '@/components/atoms/svg/skills/pyhton'
import ReactIcon from '@/components/atoms/svg/skills/React'
import Tailwind from '@/components/atoms/svg/skills/tailwind'
import Typescript from '@/components/atoms/svg/skills/typescript'
import Tools from '@/components/atoms/svg/tools'
export default function Skills() {
  return (
    <section className="pt-10 md:pt-20">
      {/* section title */}
      <div className="flex items-center justify-center gap-4 pb-8 md:justify-start">
        <Tools />
        <OnestText
          text="Tecnologías"
          style="bold"
          fontSize="36px"
          className="text-white"
        />
      </div>
      {/* tecnologies */}
      <div className="grid grid-cols-2 gap-6">
        {/* frontend */}
        <div>
          <OnestText
            text="FrontEnd"
            style="bold"
            fontSize="36px"
            className="bg-gradient-to-t from-[#54fbff] to-[#00a4c9] bg-clip-text text-center text-transparent dark:from-[#d4b48f] dark:to-blue-500 dark:text-transparent"
          />
          <div className="bg-dark-blue/60 grid w-full grid-cols-3 gap-4 rounded-2xl px-20 py-5 pt-4">
            <Html />
            <Css />
            <Js />
            <Tailwind />
            <ReactIcon />
            <Figma />
            <Typescript />
          </div>
        </div>
        {/* backend */}
        <div>
          <OnestText
            text="BackEnd"
            style="bold"
            fontSize="36px"
            className="bg-gradient-to-t from-[#54fbff] to-[#00a4c9] bg-clip-text text-center text-transparent dark:from-[#d4b48f] dark:to-purple-400 dark:text-transparent"
          />
          <div className="bg-dark-blue/60 grid w-full grid-cols-3 gap-4 rounded-2xl px-20 py-5 pt-4">
            <NextJs />
            <MySQL />
          </div>
        </div>
        {/* learning */}
        <div>
          <OnestText
            text="Aprendiendo"
            style="bold"
            fontSize="36px"
            className="bg-gradient-to-t from-[#54fbff] to-[#00a4c9] bg-clip-text text-center text-transparent dark:from-[#d4b48f] dark:to-rose-950 dark:text-transparent"
          />
          <div className="bg-dark-blue/60 grid w-full grid-cols-3 gap-4 rounded-2xl px-20 py-5 pt-4">
            <Python />
            <Php />
          </div>
        </div>
        {/* tools */}
        <div>
          <OnestText
            text="Herramientas"
            style="bold"
            fontSize="36px"
            className="bg-gradient-to-t from-[#54fbff] to-[#00a4c9] bg-clip-text text-center text-transparent dark:from-[#d4b48f] dark:to-emerald-600 dark:text-transparent"
          />
          <div className="bg-dark-blue/60 grid w-full grid-cols-3 gap-4 rounded-2xl px-20 py-5 pt-4"></div>
        </div>
      </div>
    </section>
  )
}
