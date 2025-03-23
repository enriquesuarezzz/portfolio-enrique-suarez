import { OnestText } from '@/components/atoms/onest_text'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Instagram from '@/components/atoms/svg/instagram'
import Whatsapp from '@/components/atoms/svg/whatsapp'

export default async function Footer() {
  const t = await getTranslations('navbar')
  return (
    <footer className="bottom-0 mt-10 w-full items-center rounded-t-xl bg-dark-blue md:mt-12 lg:mt-20">
      <div className="mx-auto max-w-screen-xl items-center p-4 md:py-8">
        {/* Navigation Links */}
        <div className="flex flex-col items-center justify-center">
          <div className="mb-2 mt-2 flex w-full items-center justify-center gap-3 text-center md:mt-0 md:flex md:gap-10">
            {/* Home Link */}
            <Link href="#experience">
              <OnestText
                fontSize="19px"
                style="bold"
                className="relative mx-auto block w-fit text-white after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-[orange] after:transition after:duration-300 after:content-[''] hover:text-orange after:hover:scale-x-100"
              >
                {t('experience')}
              </OnestText>
            </Link>
            {/* About Us Link */}
            <Link href="#skills">
              <OnestText
                fontSize="19px"
                style="bold"
                className="relative mx-auto block w-fit text-white after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-[orange] after:transition after:duration-300 after:content-[''] hover:text-orange after:hover:scale-x-100"
              >
                {t('skills')}
              </OnestText>
            </Link>
            {/* Products Link */}
            <Link href="#proyects">
              <OnestText
                fontSize="19px"
                style="bold"
                className="relative mx-auto block w-fit text-white after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-[orange] after:transition after:duration-300 after:content-[''] hover:text-orange after:hover:scale-x-100"
              >
                {t('proyects')}
              </OnestText>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-3 border-white lg:my-4" />
        {/* Social Media Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 md:gap-6 md:pt-4">
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/enriquesuarezzz/"
            target="_blank"
            rel="noopener noreferrer"
            className="my-auto flex h-6 items-start md:h-5 md:items-center"
            aria-label="DC Wine Instagram"
          >
            {/* Instagram Icon */}
            <Instagram
              color="white"
              className="my-auto h-5 w-5 transition-all duration-300 ease-in-out hover:scale-110"
            />
            {/* Instagram Account */}
            <OnestText
              fontSize="16px"
              style="bold"
              className="relative block w-fit pl-2 text-white after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-[orange] after:transition after:duration-300 after:content-[''] hover:text-white after:hover:scale-x-100"
            >
              @enriquesuarezzz
            </OnestText>
          </a>
          {/* Whatsapp Link */}
          <a
            href="https://wa.me/+34688923009"
            target="_blank"
            rel="noopener noreferrer"
            className="my-auto flex h-6 items-start md:h-5 md:items-center"
          >
            {/* Whatsapp Icon */}
            <Whatsapp
              color="white"
              className="my-auto h-5 w-5 transition-all duration-300 ease-in-out hover:scale-110"
            />
            {/* Whatsapp Number */}
            <OnestText
              fontSize="16px"
              style="bold"
              className="relative block w-fit pl-2 text-white after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-[orange] after:transition after:duration-300 after:content-[''] hover:text-white after:hover:scale-x-100"
            >
              688923009
            </OnestText>
          </a>
        </div>

        {/* Second Divider */}
        <div className="flex justify-center">
          <hr className="mt-4 w-32 border-white md:mt-8" />
        </div>

        <div className="flex items-center justify-center gap-6 pt-4">
          <OnestText fontSize="16px" className="text-white" style="bold">
            Enrique Suárez © 2025
          </OnestText>
        </div>
      </div>
    </footer>
  )
}
