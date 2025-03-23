import { Experience } from '@/components/molecules/experience/experience'
import { Header } from '@/components/molecules/header/header'
import { Proyects } from '@/components/molecules/proyects/proyects'
import { Skills } from '@/components/molecules/skills/skills'

import { getTranslations } from 'next-intl/server'

export async function generateMetadata() {
  const t = await getTranslations('metadata')

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default async function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-8xl flex-col px-4 md:px-10">
      <Header />
      <Experience />
      <Skills />
      <Proyects />
    </main>
  )
}
