import { Config } from 'next-i18n-router/dist/types'

const i18nConfig: Config = {
  locales: ['es', 'en'],
  defaultLocale: 'es',
  prefixDefault: true,
  localeCookie: 'NEXT_LOCALE',
}

module.exports = i18nConfig
