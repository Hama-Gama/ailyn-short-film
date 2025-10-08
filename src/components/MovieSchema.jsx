import React from 'react'
import { Helmet } from 'react-helmet'
import i18n from '../i18n' // импорт настройки i18next

const MovieSchema = () => {
	const lang = i18n.language // "ru" | "en" | "kk"

	// --- Мультиязычные мета-теги ---
	const meta = {
		ru: {
			title: 'Айлин — официальный сайт фильма 2026 года',
			description:
				'Официальный сайт фильма «Айлин». Узнайте о премьере, актёрах, сюжете и трейлере драмы 2026 года. Новости и фото со съёмок.',
		},
		en: {
			title: 'Ailyn — official 2026 movie website',
			description:
				'Official website of the film “Ailyn”. Learn about the 2026 premiere, cast, story, and trailer of this emotional drama.',
		},
		kk: {
			title: 'Айлин — 2026 жылғы фильмнің ресми сайты',
			description:
				'«Айлин» фильмінің ресми сайты. 2026 жылғы драманың премьерасы, актерлері, оқиғасы және трейлері туралы ақпарат.',
		},
	}

	const metaTitle = meta[lang]?.title || meta.en.title
	const metaDescription = meta[lang]?.description || meta.en.description

	// --- Данные о фильме ---
	const data = {
		name: 'Ailyn / Айлин',
		url: 'https://ailynfilm.kz',
		image: 'https://ailynfilm.kz/poster.jpg',
	}

	// --- JSON-LD Schema.org (Movie) ---
	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Movie',
		name: metaTitle,
		url: data.url,
		image: data.image,
		description: metaDescription,
		genre: 'Драма',
		datePublished: '2025-12-15',
		inLanguage: lang,
		director: {
			'@type': 'Person',
			name: 'Unknown',
		},
		publisher: {
			'@type': 'Organization',
			name: 'Ailyn Studio',
			url: data.url,
		},
		sameAs: ['https://www.imdb.com/title/tt1234567/'],
	}

	return (
		<Helmet>
			{/* Язык страницы */}
			<html lang={lang} />

			{/* Title и метаописание */}
			<title>{metaTitle}</title>
			<meta name='description' content={metaDescription} />

			{/* --- Open Graph (для Facebook, Telegram, WhatsApp и др.) --- */}
			<meta property='og:type' content='video.movie' />
			<meta property='og:title' content={metaTitle} />
			<meta property='og:description' content={metaDescription} />
			<meta property='og:url' content={data.url} />
			<meta property='og:image' content={data.image} />
			<meta property='og:site_name' content='Ailyn Film' />
			<meta
				property='og:locale'
				content={lang === 'kk' ? 'kk_KZ' : lang === 'ru' ? 'ru_RU' : 'en_US'}
			/>

			{/* --- Twitter Card --- */}
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={metaTitle} />
			<meta name='twitter:description' content={metaDescription} />
			<meta name='twitter:image' content={data.image} />
			<meta name='twitter:site' content='@AilynFilm' />

			{/* --- Альтернативные языковые версии --- */}
			<link rel='alternate' href='https://ailynfilm.kz/ru' hrefLang='ru' />
			<link rel='alternate' href='https://ailynfilm.kz/en' hrefLang='en' />
			<link rel='alternate' href='https://ailynfilm.kz/kk' hrefLang='kk' />
			<link rel='alternate' href='https://ailynfilm.kz' hrefLang='x-default' />

			{/* --- Schema.org JSON-LD --- */}
			<script type='application/ld+json'>{JSON.stringify(schema)}</script>
		</Helmet>
	)
}

export default MovieSchema
