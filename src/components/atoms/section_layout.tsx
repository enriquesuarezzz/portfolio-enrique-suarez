import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionLayout({ children }: Props) {
  return (
    <section className="max-w-8xl mx-auto w-full px-4 xl:px-10">
      {children}
    </section>
  )
}
