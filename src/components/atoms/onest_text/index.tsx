'use client'
import { Onest } from 'next/font/google'
import { forwardRef, useEffect, useRef } from 'react'

export const onest = Onest({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
})

export interface OnestTextProps {
  text: string
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  style?: 'light' | 'normal' | 'semibold' | 'bold'
  fontSize?: '16px' | '18px' | '19px' | '24px' | '36px' | '52px'
  leading?: 'normal' | 'none' | 'tight' | 'snug' | 'relaxed' | 'loose'
  className?: string
}

export const OnestText = forwardRef<
  HTMLHeadingElement | HTMLParagraphElement,
  OnestTextProps
>(
  ({
    text,
    tag = 'p',
    style = 'regular',
    fontSize = '16px',
    className = 'text-black',
    leading = 'normal',
  }) => {
    const textContent = useRef<HTMLParagraphElement>(null)
    useEffect(() => {
      if (textContent.current) {
        textContent.current.innerHTML = text
      }
    }, [text])

    function getSize() {
      switch (fontSize) {
        case '16px':
          return 'text-[16px]'
        case '18px':
          return 'text-[16px] lg:text-[18px]'
        case '19px':
          return 'text-[13px]  md:text-[19px]'
        case '24px':
          return 'text-[18px] lg:text-[24px]'
        case '36px':
          return 'text-[28px] lg:text-[36px]'
        case '52px':
          return 'text-[30px] md:text-[48px] lg:text-[52px]'
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

    let globalStyle = `${onest.className} ${getSize()} ${getLeading()} ${getStyle()} antialiased`

    function getTag() {
      switch (tag) {
        case 'h1':
          return (
            <h1 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h1>
          )
        case 'h2':
          return (
            <h2 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h2>
          )
        case 'h3':
          return (
            <h3 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h3>
          )
        case 'h4':
          return (
            <h4 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h4>
          )
        case 'h5':
          return (
            <h5 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h5>
          )
        case 'h6':
          return (
            <h6 ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </h6>
          )
        case 'p':
          return (
            <p ref={textContent} className={`${globalStyle} ${className}`}>
              {text}
            </p>
          )
      }
    }

    return <>{getTag()}</>
  },
)

OnestText.displayName = 'OnestText'
