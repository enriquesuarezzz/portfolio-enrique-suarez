import { OnestText } from '@/components/atoms/onest_text'
import Tools from '@/components/atoms/svg/tools'
export default function Skills() {
  return (
    <section className="pt-10 md:pt-20">
      <div className="flex items-center justify-center gap-4 pb-8 md:justify-start">
        <Tools />
        <OnestText
          text="Tecnologías"
          style="bold"
          fontSize="36px"
          className="text-white"
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-dark-blue/60 h-64 w-full rounded-2xl">
          <OnestText
            text="FrontEnd"
            style="bold"
            fontSize="36px"
            className="mb-8 bg-gradient-to-t from-[#54fbff] to-[#00a4c9] bg-clip-text text-center text-xl font-bold text-transparent lg:break-words lg:text-4xl dark:from-[#395f8d] dark:to-[#3bd1ff] dark:text-transparent"
          />
        </div>
        <div className="bg-dark-blue/60 h-64 w-full rounded-2xl">
          <OnestText
            text="FrontEnd"
            style="bold"
            fontSize="36px"
            className="mb-8 bg-gradient-to-t from-[#54fbff] to-[#00a4c9] bg-clip-text text-center text-xl font-bold text-transparent lg:break-words lg:text-4xl dark:from-[#ffffff] dark:to-indigo-500 dark:text-transparent"
          />
        </div>
        <div className="bg-dark-blue/60 h-64 w-full rounded-2xl">
          <OnestText
            text="FrontEnd"
            style="bold"
            fontSize="36px"
            className="text-white"
          />
        </div>
        <div className="bg-dark-blue/60 h-64 w-full rounded-2xl">
          <OnestText
            text="FrontEnd"
            style="bold"
            fontSize="36px"
            className="text-orange"
          />
        </div>
      </div>
    </section>
  )
}
