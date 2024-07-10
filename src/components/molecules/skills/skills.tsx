import { OnestText } from '@/components/atoms/onest_text'
import Tools from '@/components/atoms/svg/tools'
export default function Skills() {
  return (
    <section>
      <div className="flex items-center justify-center gap-4 md:justify-start">
        <Tools />
        <OnestText
          text="Tecnologías"
          style="bold"
          fontSize="36px"
          className="text-white"
        />
      </div>
      <div></div>
      <div></div>
    </section>
  )
}
