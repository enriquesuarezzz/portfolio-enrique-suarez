import { OnestText } from '@/components/atoms/onest_text'
import Link from 'next/link'

export default function Navbar() {
  //array of navbar objects
  const data = [
    {
      title: 'Experiencia',
      href: '/experiencia',
    },
    {
      title: 'Tecnologías',
      href: '/tecnologías',
    },
    {
      title: 'Proyectos',
      href: '/proyectos',
    },
    {
      title: 'Contacto',
      href: '/contacto',
    },
  ]
  return (
    <nav className="fixed top-0 mx-auto flex w-full justify-center gap-3 pt-5 md:gap-5">
      {/* navbar links */}
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
