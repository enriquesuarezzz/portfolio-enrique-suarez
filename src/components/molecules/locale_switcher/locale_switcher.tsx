import { useLocale } from 'next-intl'
import LocaleSwitcherSelect from '../locale_switcher_select/locale_switcher_select'

export default function LocaleSwitcher() {
  const locale = useLocale()

  return (
    <div className="flex items-center gap-2">
      <LocaleSwitcherSelect defaultValue={locale} label="Select a language" />
    </div>
  )
}
