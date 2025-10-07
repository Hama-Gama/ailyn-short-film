import { useTranslation } from 'react-i18next'

export default function Hero() {
	const { t } = useTranslation()

	return (
		<section
			className='relative w-full h-screen bg-cover bg-center'
			style={{
				backgroundImage: "url('/images/hero-pc.jpg')",
			}}
		>
			{/* Тёмный оверлей */}
			<div className='absolute inset-0 bg-black/50'></div>

			{/* Контент */}
			<div className='relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4'>
				<h1 className='text-5xl md:text-6xl font-bold'>{t('hero.title')}</h1>
				<h2 className='mt-3 text-2xl md:text-3xl'>{t('hero.subtitle')}</h2>
				<p className='mt-2 text-lg md:text-xl'>{t('hero.genre')}</p>
			</div>
		</section>
	)
}
