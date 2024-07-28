import { OnestText } from '@/components/atoms/onest_text'
import Link from 'next/link'

export default function Navbar() {
  const data = [
    {
      title: 'Experiencia',
      href: '/#experience',
    },
    {
      title: 'Tecnologías',
      href: '/#skills',
    },
    {
      title: 'Proyectos',
      href: '/#proyects',
    },
    {
      title: 'Contacto',
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
