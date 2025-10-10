import { useTranslation } from 'react-i18next'

const FilmInfo = () => {
	const { t } = useTranslation()

	const info = [
		{ key: 'duration', label: t('filmInfo.duration') },
		{ key: 'language', label: t('filmInfo.language') },
		{ key: 'days', label: t('filmInfo.days') },
		{ key: 'genre', label: t('filmInfo.genre') },
		{ key: 'city', label: t('filmInfo.city') },
		{ key: 'budget', label: t('filmInfo.budget') },
		{ key: 'goal', label: t('filmInfo.goal') },
	]

	return (
		<section
			id='film-info'
			className='w-full bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8'
		>
			<div className='max-w-3xl mx-auto text-left'>
				<h2 className='text-2xl font-bold mb-6'>{t('filmInfo.title')}</h2>
				<div className='space-y-2 text-lg leading-relaxed'>
					{info.map(item => {
						// Разделяем текст по первому двоеточию — чтобы сделать левую часть жирной
						const [label, value] = item.label.split(':')
						return (
							<p key={item.key}>
								<span className='font-semibold'>{label}:</span>
								{value && <span> {value.trim()}</span>}
							</p>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default FilmInfo
