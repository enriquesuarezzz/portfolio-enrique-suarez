export const COOKIE_CONSENT = 'dcwine-cookie-consent'

export abstract class CookieClient {
  static setCookie(name: string, value: string, days: number = 365) {
    let expires = ''
    if (days) {
      const date = new Date()
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
      expires = '; expires=' + date.toUTCString()
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/'
  }

  static deleteCookie(name: string) {
    document.cookie = name + '=; Max-Age=-99999999;'
  }
}
