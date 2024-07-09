import { OnestText } from '@/components/atoms/onest_text'
import Link from 'next/link'

interface ButtonProps {
  text: string
  className?: string
  href: string
  rel?: string
  children?: React.ReactNode
}
export default function Button({
  text,
  className,
  href,
  children,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`flex h-fit w-fit items-center justify-center gap-2 rounded-full bg-gray-700/70 px-6 py-1 hover:bg-gray-800 ${className}`}
    >
      {children}
      <OnestText text={text} fontSize="18px" className={`text-white`} />
    </Link>
  )
}
