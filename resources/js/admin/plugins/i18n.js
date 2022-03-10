import Vue from 'vue'
import store from '~admin/store'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {}
})

/**
 * @param {String} locale
 */
export async function loadMessages (locale) {
  if (Object.keys(i18n.getLocaleMessage(locale)).length === 0) {
    const messages = await import(/* webpackChunkName: '' */ `~admin/lang/${locale}`)
    i18n.setLocaleMessage(locale, messages)
  }

  if (i18n.locale !== locale) {
    i18n.locale = locale
  }

  if (i18n.locale === 'ar') {
	  document.querySelector('body').classList.remove('ltr');
	  document.querySelector('body').classList.add('rtl');
  }

  if (i18n.locale === 'en') {
	  document.querySelector('body').classList.remove('rtl');
	  document.querySelector('body').classList.add('ltr');
  }

}

;(async function () {
  await loadMessages(store.getters['lang/locale'])
})()

export default i18n
