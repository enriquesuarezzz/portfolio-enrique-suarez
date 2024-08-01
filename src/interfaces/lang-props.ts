import { Dictionary, LangOptions } from '@/app/[lang]/dictionaries'

export interface LangProps {
  dict: Dictionary
  lang?: LangOptions
}

export interface GeneralProps {
  params: {
    lang: LangOptions
  }
}
