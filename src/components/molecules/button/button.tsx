import { OnestText } from '@/components/atoms/onest_text'
import Link from 'next/link'

interface ButtonProps {
  text: string
  className?: string
  href: string
  rel?: string
  children?: React.ReactNode
  download?: string
}
export default function Button({
  text,
  className,
  href,
  children,
  download,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`flex h-fit w-fit items-center justify-center gap-2 rounded-full bg-gray-700/70 px-6 py-1 hover:bg-gray-800 ${className}`}
    >
      {children}
      <OnestText children={text} fontSize="19px" className={`text-white`} />

      {download}
    </Link>
  )
}
