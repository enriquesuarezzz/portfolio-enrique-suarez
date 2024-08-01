import { i18nRouter } from 'next-i18n-router'
import { Config } from 'next-i18n-router/dist/types'
import { NextRequest } from 'next/server'
import * as i18nConfig from '../i18nConfig'

export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig as Config)
}

// only applies this middleware to files in the app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
}
