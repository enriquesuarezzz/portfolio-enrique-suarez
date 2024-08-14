import { OnestText } from '@/components/atoms/onest_text'
import Computer from '@/components/atoms/svg/computer'
import Image from 'next/image'
import Link from 'next/link'
import { LangProps } from '@/interfaces/lang-props'

export default function Experience({ dict }: LangProps) {
  return (
    <section
      id="experience"
      className="flex w-full items-center justify-center"
    >
      <div className="w-full pt-10 md:pt-40">
        {/* title */}
        <div className="flex items-center justify-center gap-4 md:justify-start">
          {/* computer icon */}
          <Computer />
          {/* title */}
          <OnestText
            text={dict.expecience.title}
            style="bold"
            fontSize="36px"
            className="text-white"
          />
        </div>
        <div className="flex flex-col items-center justify-center pt-6 md:flex-row md:items-start">
          <div className="flex w-full flex-col items-center md:w-1/2 md:items-start">
            {/* company name */}
            <OnestText
              text={dict.expecience.subtitle}
              style="bold"
              fontSize="24px"
              className="text-orange"
            />
            {/* period */}
            <OnestText
              text={dict.expecience.date}
              style="bold"
              fontSize="16px"
              className="text-white"
            />
          </div>
          {/* description */}
          <div className="flex w-full pt-4 md:w-1/2 md:pt-0">
            <OnestText
              text={dict.expecience.description}
              style="bold"
              fontSize="16px"
              className="text-center text-white md:text-start"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-5 md:pt-10">
          <div>
            {/* title */}
            <OnestText
              text={dict.expecience.proyects_title}
              style="bold"
              fontSize="16px"
              className="text-center text-white md:text-start"
            />
          </div>
          {/* projects */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {/* first project */}
            <Link href="https://mumbaimasalarestaurants.com/es" target="_blank">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/mumbai.avif'}`}
                width={400}
                height={300}
                alt="Proyect"
                className="transition-all hover:scale-110"
              />
            </Link>
            {/* second project */}
            <Link href="https://kalmaholiday.com/es" target="_blank">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/kalma_holiday.avif'}`}
                width={400}
                height={300}
                alt="Proyect"
                className="transition-all hover:scale-110"
              />
            </Link>
            {/* third project */}
            <Link href="https://www.graciplus.com/es" target="_blank">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/graciplus.avif'}`}
                width={400}
                height={300}
                alt="Proyect"
                className="transition-all hover:scale-110"
              />
            </Link>
            {/* fourth project */}
            <Link href="https://www.bravus-design.com/" target="_blank">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_PATH + '/images/bravus_design.avif'}`}
                width={400}
                height={300}
                alt="Proyect"
                className="transition-all hover:scale-110"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
