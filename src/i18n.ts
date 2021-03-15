import { createI18n, LocaleMessages, VueMessageType } from 'vue-i18n'
function loadLocaleMessages(): LocaleMessages<VueMessageType> {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages: LocaleMessages<VueMessageType> = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key).default
    }
  })
  return messages
}
const i18n= createI18n({
  globalInjection: true ,
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: loadLocaleMessages()
})
export default i18n
