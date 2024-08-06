import { OnestText } from '@/components/atoms/onest_text'
import Github from '@/components/atoms/svg/github'
import Css from '@/components/atoms/svg/skills/css'
import Figma from '@/components/atoms/svg/skills/figma'
import Git from '@/components/atoms/svg/skills/git'
import Html from '@/components/atoms/svg/skills/html'
import Js from '@/components/atoms/svg/skills/js'
import MySQL from '@/components/atoms/svg/skills/mysql'
import NextJs from '@/components/atoms/svg/skills/nextjs'
import Nodejs from '@/components/atoms/svg/skills/nodejs'
import Php from '@/components/atoms/svg/skills/php'
import Python from '@/components/atoms/svg/skills/pyhton'
import ReactIcon from '@/components/atoms/svg/skills/react'
import Tailwind from '@/components/atoms/svg/skills/tailwind'
import Typescript from '@/components/atoms/svg/skills/typescript'
import VisualStudioCode from '@/components/atoms/svg/skills/visual_studio_sode'
import Tools from '@/components/atoms/svg/tools'
import { LangProps } from '@/interfaces/lang-props'
export default function Skills({ dict }: LangProps) {
  return (
    <section id="skills" className="pt-10 md:pt-20">
      {/* section title */}
      <div className="flex items-center justify-center gap-4 pb-8 md:justify-start">
        <Tools className="animate-spin-slow" />
        <OnestText
          text={dict.skills.title}
          style="bold"
          fontSize="36px"
          className="text-white"
        />
      </div>
      {/* tecnologies */}
      <div className="mx-10 grid grid-cols-1 gap-6 md:mx-0 md:grid-cols-2">
        {/* frontend */}
        <div className="flex flex-col">
          {/* frontend title */}
          <OnestText
            text="FrontEnd"
            style="bold"
            fontSize="36px"
            className="bg-gradient-to-t from-[#54fbff] to-[#00a4c9] bg-clip-text text-center text-transparent dark:from-[#d4b48f] dark:to-blue-500 dark:text-transparent"
          />
          {/* frontend icons */}
          <div className="mx-auto grid h-full w-full grid-cols-2 gap-4 rounded-2xl bg-dark-blue/60 py-6 lg:grid-cols-3">
            {/* html */}
            <div className="flex flex-col">
              <Html className="mx-auto size-10 md:size-20" />
              <OnestText
                text={'HTML'}
                className="text-center text-white"
                style="bold"
              />
            </div>
            {/* css */}
            <div className="flex flex-col">
              <Css className="mx-auto size-10 md:size-20" />
              <OnestText
                text={'CSS'}
                className="text-center text-white"
                style="bold"
              />
            </div>
            {/* javascript */}
            <div className="flex flex-col">
              <Js className="mx-auto size-10 md:size-20" />
              <OnestText
                text={'JavaScript'}
                className="text-center text-white"
                style="bold"
              />
            </div>
            {/* tailwind css */}
            <div className="flex flex-col">
              <Tailwind className="mx-auto size-10 md:size-20" />
              <OnestText
                text={'Tailwind CSS'}
                className="text-center text-white"
                style="bold"
              />
            </div>
            {/* react */}
            <div className="flex flex-col">
              <ReactIcon className="mx-auto size-10 md:size-20" />
              <OnestText
                text={'React'}
                className="text-center text-white"
                style="bold"
              />
            </div>
            {/* typescript */}
            <div className="flex flex-col">
              <Typescript className="mx-auto size-10 md:size-20" />
              <OnestText
                text={'Typescript'}
                className="text-center text-white"
                style="bold"
              />
            </div>
          </div>
        </div>
        {/* backend */}
        <div className="flex flex-col">
          {/* backend title */}
          <OnestText
            text="BackEnd"
            style="bold"
            fontSize="36px"
            className="bg-gradient-to-t from-[#54fbff] to-[#00a4c9] bg-clip-text text-center text-transparent dark:from-[#d4b48f] dark:to-purple-400 dark:text-transparent"
          />
          {/* backend icons */}
          <div className="mx-auto grid h-full w-full grid-cols-2 gap-4 rounded-2xl bg-dark-blue/60 py-6 lg:grid-cols-3">
            {/* nextjs */}
            <div className="flex flex-col">
              <NextJs className="mx-auto size-10 md:size-20" />
              <OnestText
                text={'NextJS'}
                className="text-center text-white"
                style="bold"
              />
            </div>
            <div className="flex flex-col">
              <MySQL className="mx-auto size-10 md:size-20" />
              <OnestText
                text={'MySql'}
                className="text-center text-white"
                style="bold"
              />
            </div>
          </div>
        </div>
        {/* learning */}
        <div className="flex flex-col">
          {/* learning title */}
          <OnestText
            text={dict.skills.learning}
            style="bold"
            fontSize="36px"
            className="bg-gradient-to-t from-[#54fbff] to-[#00a4c9] bg-clip-text text-center text-transparent dark:from-[#d4b48f] dark:to-rose-950 dark:text-transparent"
          />
          {/* learning icons */}
          <div className="mx-auto grid h-full w-full grid-cols-2 gap-4 rounded-2xl bg-dark-blue/60 py-6 lg:grid-cols-3">
            {/* pyhon */}
            <div className="flex flex-col">
              <Python className="mx-auto size-10 md:size-20" />
              <OnestText
                text={'Python'}
                className="text-center text-white"
                style="bold"
              />
            </div>
            {/* php */}
            <div className="flex flex-col">
              <Php className="mx-auto size-10 md:size-20" />
              <OnestText
                text={'PHP'}
                className="text-center text-white"
                style="bold"
              />
            </div>
            <div className="flex flex-col">
              <Nodejs className="mx-auto size-10 md:size-20" />
              <OnestText
                text={'NodeJS'}
                className="text-center text-white"
                style="bold"
              />
            </div>
          </div>
        </div>
        {/* tools */}
        <div className="flex flex-col">
          {/* tools title */}
          <OnestText
            text={dict.skills.tools}
            style="bold"
            fontSize="36px"
            className="bg-gradient-to-t from-[#54fbff] to-[#00a4c9] bg-clip-text text-center text-transparent dark:from-[#d4b48f] dark:to-emerald-600 dark:text-transparent"
          />
          {/* tools icons */}
          <div className="mx-auto grid h-full w-full grid-cols-2 gap-4 rounded-2xl bg-dark-blue/60 py-6 lg:grid-cols-3">
            {/* visual studio code */}
            <div className="flex flex-col">
              <VisualStudioCode className="mx-auto size-10 md:size-20" />
              <OnestText
                text={'Visual Studio Code'}
                className="text-center text-white"
                style="bold"
              />
            </div>
            {/* git*/}
            <div className="flex flex-col">
              <Git className="mx-auto size-10 md:size-20" />
              <OnestText
                text={'Git'}
                className="text-center text-white"
                style="bold"
              />
            </div>
            {/* github*/}
            <div className="flex flex-col">
              <Github className="mx-auto size-10 md:size-20" />
              <OnestText
                text={'GitHub'}
                className="text-center text-white"
                style="bold"
              />
            </div>
            {/* figma */}
            <div className="flex flex-col">
              <Figma className="mx-auto size-10 md:size-20" />
              <OnestText
                text={'Figma'}
                className="text-center text-white"
                style="bold"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
