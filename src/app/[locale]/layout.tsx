import { Locale, routing } from '@/i18n/routing'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import './globals.css'
import Navbar from '@/components/molecules/navbar/navbar'
import { Barlow, Geist_Mono } from 'next/font/google'
import Footer from '@/components/molecules/footer/footer'
import { Metadata } from 'next'

const BarlowText = Barlow({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-barlow',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-geist-mono',
})
export const metadata: Metadata = {
  title: 'Portfolio Enrique Suarez',
  description: 'Enrique Suarez Web developer Portfolio',
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { locale: Locale }
}>) {
  const { locale } = await params

  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  // Get all translations (messages)
  const messages = await getMessages()

  // Fetch translations for the navbar specifically
  const navbarTranslations = messages.navbar as {
    experience: string
    skills: string
    projects: string
    contact: string
  }

  return (
    <html lang={locale}>
      <body className={`${BarlowText.variable} ${geistMono.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar translations={navbarTranslations} />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
