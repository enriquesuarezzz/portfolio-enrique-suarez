import { OnestText } from '@/components/atoms/onest_text'
import LightMode from '@/components/atoms/svg/light_mode'
import Link from 'next/link'

export default function Navbar() {
  //array of navbar objects
  const data = [
    {
      title: 'Experiencia',
      href: '/#expererience',
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

      <LightMode />
    </nav>
  )
}
