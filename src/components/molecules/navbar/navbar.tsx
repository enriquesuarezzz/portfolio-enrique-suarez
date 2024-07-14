import { OnestText } from '@/components/atoms/onest_text'
import Link from 'next/link'

export default function Navbar() {
  const data = [
    {
      title: 'Experiencia',
      href: '/experiencia',
    },
    {
      title: 'Proyectos',
      href: '/proyectos',
    },
    {
      title: 'Sobre Mí',
      href: '/sobremi',
    },
    {
      title: 'Contacto',
      href: '/contacto',
    },
  ]
  return (
    <nav className="fixed top-0 mx-auto flex w-full justify-center gap-3 pr-4 pt-5 md:gap-5 md:pr-0">
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
