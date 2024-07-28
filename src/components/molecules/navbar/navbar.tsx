import { OnestText } from '@/components/atoms/onest_text'
import { LangProps } from '@/interfaces/lang-props'
import Link from 'next/link'

export default function Navbar({ dict }: LangProps) {
  const data = [
    {
      title: `${dict.navbar.experience}`,
      href: '/#experience',
    },
    {
      title: `${dict.navbar.skills}`,
      href: '/#skills',
    },
    {
      title: `${dict.navbar.proyects}`,
      href: '/#proyects',
    },
    {
      title: `${dict.navbar.contact}`,
      href: 'mailto:enriquesuarezmartin@gmail.com',
    },
  ]

  return (
    <nav className="fixed top-0 mx-auto flex w-full items-center justify-center gap-3 pt-5 md:gap-5">
      {/* Navbar links */}
      {data.map((item) => (
        <Link href={item.href} key={item.title}>
          <OnestText
            text={item.title}
            style="bold"
            fontSize="18px"
            className="text-white hover:text-orange"
          />
        </Link>
      ))}
    </nav>
  )
}
