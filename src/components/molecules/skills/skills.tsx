import { OnestText } from '@/components/atoms/onest_text'
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
          <div className="h-64 w-full rounded-2xl bg-dark-blue/60"></div>
        </div>
        {/* backend */}
        <div>
          <OnestText
            text="BackEnd"
            style="bold"
            fontSize="36px"
            className="bg-gradient-to-t from-[#54fbff] to-[#00a4c9] bg-clip-text text-center text-transparent dark:from-[#d4b48f] dark:to-purple-400 dark:text-transparent"
          />
          <div className="h-64 w-full rounded-2xl bg-dark-blue/60"></div>
        </div>
        {/* learning */}
        <div>
          <OnestText
            text="Aprendiendo"
            style="bold"
            fontSize="36px"
            className="bg-gradient-to-t from-[#54fbff] to-[#00a4c9] bg-clip-text text-center text-transparent dark:from-[#d4b48f] dark:to-rose-950 dark:text-transparent"
          />
          <div className="h-64 w-full rounded-2xl bg-dark-blue/60"></div>
        </div>
        {/* tools */}
        <div>
          <OnestText
            text="Herramientas"
            style="bold"
            fontSize="36px"
            className="bg-gradient-to-t from-[#54fbff] to-[#00a4c9] bg-clip-text text-center text-transparent dark:from-[#d4b48f] dark:to-emerald-600 dark:text-transparent"
          />
          <div className="h-64 w-full rounded-2xl bg-dark-blue/60"></div>
        </div>
      </div>
    </section>
  )
}
