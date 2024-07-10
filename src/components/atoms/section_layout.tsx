import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionLayout({ children }: Props) {
  return (
    <section className="mx-auto w-full max-w-8xl px-4 xl:px-10">
      {children}
    </section>
  )
}
