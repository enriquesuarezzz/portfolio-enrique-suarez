import { OnestText } from '@/components/atoms/onest_text'
import Computer from '@/components/atoms/svg/computer'

export default function Experience() {
  return (
    <section className="w-full max-w-[375px] pt-40 md:max-w-[1000px]">
      <div className="flex items-center justify-center gap-4 md:justify-start">
        <Computer />
        <OnestText
          text="Experiencia Laboral"
          style="bold"
          fontSize="36px"
          className="text-white"
        />
      </div>
      <div className="flex flex-col items-center pt-6 md:flex-row md:items-start">
        <div className="flex w-full flex-col md:w-1/2">
          <OnestText
            text="Marketec 360"
            style="bold"
            fontSize="24px"
            className="text-orange"
          />
          <OnestText
            text="Abril 2024 - Junio 2024"
            style="bold"
            fontSize="16px"
            className="text-white"
          />
        </div>
        <div className="flex w-full pt-4 md:w-1/2 md:pt-0">
          <OnestText
            text="Prácticas en empresa durante 3 meses, encargado de la creación de páginas web interactivas utilizando <span class='text-orange'>NextJS</span>, <span class='text-orange'>React</span>, y <span class='text-orange'>TailwindCSS</span> con <span class='text-orange'>Github</span> y <span class='text-orange'>Git</span> como control de versiones."
            style="bold"
            fontSize="16px"
            className="text-white"
          />
        </div>
      </div>
    </section>
  )
}
