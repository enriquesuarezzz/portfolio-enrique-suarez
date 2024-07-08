import { OnestText } from '@/components/atoms/onest_text'
import Link from 'next/link'

interface ButtonProps {
  text: string
  className?: string
  href: string
  rel?: string
}
export default function Button({ text, className, href }: ButtonProps) {
  return (
    <Link href={href}>
      <OnestText
        text={text}
        fontSize="18px"
        className={`h-fit w-fit rounded-full bg-gray-700/70 px-6 py-1 text-white hover:bg-gray-800 ${className}`}
      />
    </Link>
  )
}
