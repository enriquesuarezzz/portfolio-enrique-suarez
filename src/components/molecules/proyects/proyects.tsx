import { OnestText } from '@/components/atoms/onest_text'
import LightBulb from '@/components/atoms/svg/lightbulb'

export default function Proyects() {
  return (
    <section className="pt-10 md:pt-20">
      {/* section title */}
      <div className="flex items-center justify-center gap-4 pb-8 md:justify-start">
        {/* lightbulb icon */}
        <LightBulb />
        <OnestText
          text="Proyectos"
          style="bold"
          fontSize="36px"
          className="text-white"
        />
      </div>
    </section>
  )
}
