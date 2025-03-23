'use client'
import { Onest } from 'next/font/google'
import { forwardRef } from 'react'

export const onest = Onest({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
})

export interface OnestTextProps {
  children: React.ReactNode // Allow JSX as children
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  style?: 'light' | 'normal' | 'semibold' | 'bold'
  fontSize?:
    | '12px'
    | '14px'
    | '16px'
    | '19px'
    | '20px'
    | '22px'
    | '28px'
    | '32px'
    | '44px'
    | '56px'
  leading?: 'normal' | 'none' | 'tight' | 'snug' | 'relaxed' | 'loose'
  className?: string
}

export const OnestText = forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  OnestTextProps
>(
  (
    {
      children,
      tag = 'p',
      style = 'regular',
      fontSize = '16px',
      className = 'text-black',
      leading = 'normal',
    },
    ref, // Include the ref parameter here
  ) => {
    function getSize() {
      switch (fontSize) {
        case '12px':
          return 'text-[12px]'
        case '14px':
          return 'text-[14px]'
        case '16px':
          return 'text-[14px] md:text-[16px]'
        case '19px':
          return 'text-[14px] md:text-[16px] lg:text-[19px]'
        case '20px':
          return 'text-[16px] md:text-[20px]'
        case '22px':
          return 'text-[20px] md:text-[22px]'
        case '28px':
          return 'text-[20px] md:text-[28px]'
        case '32px':
          return 'text-[22px] md:text-[26px] lg:text-[32px]'
        case '44px':
          return 'text-[22px]  md:text-[44px]'
        case '56px':
          return 'text-[26px] md:text-[42px] lg:text-[56px]'
      }
    }

    function getStyle() {
      switch (style) {
        case 'light':
          return 'font-light'
        case 'normal':
          return 'font-normal'
        case 'semibold':
          return 'font-semibold'
        case 'bold':
          return 'font-bold'
      }
    }

    function getLeading() {
      switch (leading) {
        case 'normal':
          return 'leading-normal'
        case 'none':
          return 'leading-none'
        case 'tight':
          return 'leading-tight'
        case 'snug':
          return 'leading-snug'
        case 'relaxed':
          return 'leading-relaxed'
        case 'loose':
          return 'leading-loose'
      }
    }

    const globalStyle = `${onest.className} ${getSize()} ${getLeading()} ${getStyle()} antialiased`

    function getTag() {
      switch (tag) {
        case 'h1':
          return (
            <h1 ref={ref} className={`${globalStyle} ${className}`}>
              {children}
            </h1>
          )
        case 'h2':
          return (
            <h2 ref={ref} className={`${globalStyle} ${className}`}>
              {children}
            </h2>
          )
        case 'h3':
          return (
            <h3 ref={ref} className={`${globalStyle} ${className}`}>
              {children}
            </h3>
          )
        case 'h4':
          return (
            <h4 ref={ref} className={`${globalStyle} ${className}`}>
              {children}
            </h4>
          )
        case 'h5':
          return (
            <h5 ref={ref} className={`${globalStyle} ${className}`}>
              {children}
            </h5>
          )
        case 'h6':
          return (
            <h6 ref={ref} className={`${globalStyle} ${className}`}>
              {children}
            </h6>
          )
        case 'p':
          return (
            <p ref={ref} className={`${globalStyle} ${className}`}>
              {children}
            </p>
          )
      }
    }

    return <>{getTag()}</>
  },
)

OnestText.displayName = 'OnestText'
