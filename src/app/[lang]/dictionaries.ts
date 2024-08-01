'server-only'

export type Dictionary = typeof import('@/i18n/es.json')

type Dictionaries = {
  [key: string]: () => Promise<Dictionary>
}

const dictionaries: Dictionaries = {
  es: () => import('@/i18n/es.json').then((module) => module.default),
  en: () => import('@/i18n/en.json').then((module) => module.default),
}

export const getDictionary = async (lang: LangOptions): Promise<Dictionary> => {
  const dictionary = dictionaries[lang]
  return dictionary()
}

export enum LangOptions {
  es = 'es',
  en = 'en',
}
