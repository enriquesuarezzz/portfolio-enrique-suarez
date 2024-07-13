import { OnestText } from '@/components/atoms/onest_text'
import Github from '@/components/atoms/svg/github'
import Css from '@/components/atoms/svg/skills/css'
import Figma from '@/components/atoms/svg/skills/figma'
import Git from '@/components/atoms/svg/skills/git'
import Html from '@/components/atoms/svg/skills/html'
import Js from '@/components/atoms/svg/skills/js'
import MySQL from '@/components/atoms/svg/skills/mysql'
import NextJs from '@/components/atoms/svg/skills/nextjs'
import Php from '@/components/atoms/svg/skills/php'
import Python from '@/components/atoms/svg/skills/pyhton'
import ReactIcon from '@/components/atoms/svg/skills/react'
import Tailwind from '@/components/atoms/svg/skills/tailwind'
import Typescript from '@/components/atoms/svg/skills/typescript'
import VisualStudioCode from '@/components/atoms/svg/skills/visual_studio_sode'
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
        <div className="flex flex-col">
          <OnestText
            text="FrontEnd"
            style="bold"
            fontSize="36px"
            className="bg-gradient-to-t from-[#54fbff] to-[#00a4c9] bg-clip-text text-center text-transparent dark:from-[#d4b48f] dark:to-blue-500 dark:text-transparent"
          />
          <div className="mx-auto grid h-full w-full grid-cols-2 gap-4 rounded-2xl bg-dark-blue/60 py-6 lg:grid-cols-3">
            <Html className="mx-auto size-10 md:size-20" />
            <Css className="mx-auto size-10 md:size-20" />
            <Js className="mx-auto size-10 md:size-20" />
            <Tailwind className="mx-auto size-10 md:size-20" />
            <ReactIcon className="mx-auto size-10 md:size-20" />
            <Typescript className="mx-auto size-10 md:size-20" />
          </div>
        </div>
        {/* backend */}
        <div className="flex flex-col">
          <OnestText
            text="BackEnd"
            style="bold"
            fontSize="36px"
            className="bg-gradient-to-t from-[#54fbff] to-[#00a4c9] bg-clip-text text-center text-transparent dark:from-[#d4b48f] dark:to-purple-400 dark:text-transparent"
          />
          <div className="mx-auto grid h-full max-h-[212px] w-full grid-cols-2 gap-4 rounded-2xl bg-dark-blue/60 py-6 lg:grid-cols-3">
            <NextJs className="mx-auto size-10 md:size-20" />
            <MySQL className="mx-auto size-10 md:size-20" />
          </div>
        </div>
        {/* learning */}
        <div className="flex flex-col">
          <OnestText
            text="Aprendiendo"
            style="bold"
            fontSize="36px"
            className="bg-gradient-to-t from-[#54fbff] to-[#00a4c9] bg-clip-text text-center text-transparent dark:from-[#d4b48f] dark:to-rose-950 dark:text-transparent"
          />
          <div className="mx-auto grid h-full max-h-[212px] w-full grid-cols-2 gap-4 rounded-2xl bg-dark-blue/60 py-6 lg:grid-cols-3">
            <Python className="mx-auto size-10 md:size-20" />
            <Php className="mx-auto size-10 md:size-20" />
          </div>
        </div>
        {/* tools */}
        <div className="flex flex-col">
          <OnestText
            text="Herramientas"
            style="bold"
            fontSize="36px"
            className="bg-gradient-to-t from-[#54fbff] to-[#00a4c9] bg-clip-text text-center text-transparent dark:from-[#d4b48f] dark:to-emerald-600 dark:text-transparent"
          />
          <div className="mx-auto grid h-full max-h-[212px] w-full grid-cols-2 gap-4 rounded-2xl bg-dark-blue/60 py-6 lg:grid-cols-3">
            <VisualStudioCode className="mx-auto size-10 md:size-20" />
            <Git className="mx-auto size-10 md:size-20" />
            <Github className="mx-auto size-10 md:size-20" />
            <Figma className="mx-auto size-10 md:size-20" />
          </div>
        </div>
      </div>
    </section>
  )
}
