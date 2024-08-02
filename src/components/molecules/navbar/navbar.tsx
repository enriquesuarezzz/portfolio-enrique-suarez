'use client'
import { OnestText } from '@/components/atoms/onest_text'
import England from '@/components/atoms/svg/england'
import Spain from '@/components/atoms/svg/spain'
import { LangProps } from '@/interfaces/lang-props'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar({ dict }: LangProps) {
  const router = useRouter()
  const pathname = usePathname()

  const data = [
    {
      title: dict.navbar.experience,
      href: '/#experience',
    },
    {
      title: dict.navbar.skills,
      href: '/#skills',
    },
    {
      title: dict.navbar.proyects,
      href: '/#proyects',
    },
    {
      title: dict.navbar.contact,
      href: 'mailto:enriquesuarezmartin@gmail.com',
    },
  ]

  const currentLang = pathname.startsWith('/es') ? 'es' : 'en'

  const changeLanguage = (lang: string) => {
    // Remove the leading '/' and split the path
    const segments = pathname.slice(1).split('/')

    // Check if the first segment is a language code (assuming 'en' or 'es')
    if (segments[0] === 'en' || segments[0] === 'es') {
      // Remove the existing language segment
      segments.shift()
    }

    // Add the new language segment
    const newPath = `/${lang}/${segments.join('/')}`

    // Navigate to the new path
    router.push(newPath)
  }

  return (
    <nav className="fixed top-0 mx-auto flex w-full items-center justify-center gap-3 pt-5 md:gap-5">
      {/* Navbar links */}
      {data.map((item) => (
        <Link href={item.href} key={item.title}>
          <OnestText
            text={item.title}
            style="bold"
            fontSize="19px"
            className="text-white hover:text-orange"
          />
        </Link>
      ))}
      {/* Language selection */}
      <div className="flex gap-2 md:ml-5 md:gap-3">
        <button
          onClick={() => changeLanguage('en')}
          className={`text-white hover:text-orange ${currentLang === 'es' ? 'opacity-50' : ''}`}
        >
          <England className="size-4 md:size-6" />
        </button>
        <button
          onClick={() => changeLanguage('es')}
          className={`text-white hover:text-orange ${currentLang === 'en' ? 'opacity-50' : ''}`}
        >
          <Spain className="size-4 md:size-6" />
        </button>
      </div>
    </nav>
  )
}
