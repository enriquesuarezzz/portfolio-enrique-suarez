'use client'
import { OnestText } from '@/components/atoms/onest_text'
import DarkMode from '@/components/atoms/svg/dark_mode'
import LightMode from '@/components/atoms/svg/light_mode'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.remove(theme)
    document.documentElement.classList.add(newTheme)
    localStorage.setItem('theme', newTheme)
  }

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
      href: '/#projects',
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
      <button onClick={toggleTheme} className="focus:outline-none">
        {theme === 'light' ? <LightMode /> : <DarkMode />}
      </button>
    </nav>
  )
}
