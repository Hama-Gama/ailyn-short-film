import React from 'react'
import { Helmet } from 'react-helmet'
import i18n from '../i18n' // импорт настройки i18next

const MovieSchema = () => {
	const lang = i18n.language // "ru", "en" или "kk"

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

	// --- Данные Schema.org (Movie) ---
	const movieData = {
		ru: {
			name: 'Айлин',
			description:
				'Официальный сайт фильма «Айлин». Узнайте о премьере, актёрах, сюжете и трейлере драмы 2026 года.',
			url: 'https://ailynfilm.kz',
			image: 'https://ailynfilm.kz/poster.jpg',
			genre: 'Драма',
			director: 'Unknown',
			datePublished: '2025-12-15',
			sameAs: ['https://www.imdb.com/title/tt1234567/'],
		},
		en: {
			name: 'Ailyn',
			description:
				"Official website of the film 'Ailyn'. Learn about the 2026 premiere, cast, and trailer of this emotional drama.",
			url: 'https://ailynfilm.kz',
			image: 'https://ailynfilm.kz/poster.jpg',
			genre: 'Drama',
			director: 'Unknown',
			datePublished: '2025-12-15',
			sameAs: ['https://www.imdb.com/title/tt1234567/'],
		},
		kk: {
			name: 'Айлин',
			description:
				'«Айлин» фильмінің ресми сайты. 2026 жылғы драманың премьерасы, актерлері мен трейлері туралы біліңіз.',
			url: 'https://ailynfilm.kz',
			image: 'https://ailynfilm.kz/poster.jpg',
			genre: 'Драма',
			director: 'Белгісіз',
			datePublished: '2025-12-15',
			sameAs: ['https://www.imdb.com/title/tt1234567/'],
		},
	}

	const data = movieData[lang] || movieData.en

	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Movie',
		name: data.name,
		url: data.url,
		image: data.image,
		description: data.description,
		genre: data.genre,
		datePublished: data.datePublished,
		inLanguage: lang,
		director: {
			'@type': 'Person',
			name: data.director,
		},
		publisher: {
			'@type': 'Organization',
			name: 'Ailyn Studio',
			url: data.url,
		},
		sameAs: data.sameAs,
	}

	return (
		<Helmet>
			{/* Указываем язык сайта */}
			<html lang={lang} />

			{/* Title и meta description */}
			<title>{metaTitle}</title>
			<meta name='description' content={metaDescription} />

			{/* Альтернативные языковые версии */}
			<link rel='alternate' href='https://ailynfilm.kz/ru' hrefLang='ru' />
			<link rel='alternate' href='https://ailynfilm.kz/en' hrefLang='en' />
			<link rel='alternate' href='https://ailynfilm.kz/kk' hrefLang='kk' />
			<link rel='alternate' href='https://ailynfilm.kz' hrefLang='x-default' />

			{/* JSON-LD Schema.org */}
			<script type='application/ld+json'>{JSON.stringify(schema)}</script>
		</Helmet>
	)
}

export default MovieSchema
