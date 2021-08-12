/*
 * @Description: 
 * @Author: alon
 * @Date: 2021-08-12 16:22:47
 * @LastEditTime: 2021-08-12 16:25:16
 * @LastEditors: alon
 */
/* utils/i18n.js */
export default class I18n {
    constructor(locales, locale) {
      this.locales = locales
      if (locale) {
        this.locale = locale
      }
    }
  
    setLocale(code) {
      this.locale = code
    }
  
    t(line) {
      const { locales, locale } = this
      if (locale && locales[locale] && locales[locale][line]) {
        line = locales[locale][line]
      }
  
      return line
    }
  }