import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en/translations.json'
import ru from './locales/ru/translations.json'
import kk from './locales/kk/translations.json'

i18n
	.use(LanguageDetector) // автоматически определяет язык
	.use(initReactI18next)
	.init({
		resources: {
			en: { translation: en },
			ru: { translation: ru },
			kk: { translation: kk },
		},
		fallbackLng: 'ru',
		interpolation: {
			escapeValue: false,
		},
		detection: {
			// сохраняем язык в localStorage
			order: ['localStorage', 'navigator'],
			caches: ['localStorage'],
		},
	})

export default i18n
