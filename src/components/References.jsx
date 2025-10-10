import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Card, CardContent } from '@/components/ui/card'

const imageRefs = [
	'/images/reference-img/1.jpg',
	'/images/reference-img/2.jpg',
	'/images/reference-img/3.jpg',
	'/images/reference-img/4.jpg',
	'/images/reference-img/5.jpg',
	'/images/reference-img/6.jpg',
	'/images/reference-img/7.jpg',
	'/images/reference-img/8.jpg',
	'/images/reference-img/9.jpg',
	'/images/reference-img/10.jpg',
	'/images/reference-img/11.jpg',
	'/images/reference-img/12.jpg',
	'/images/reference-img/13.jpg',
]

const videoRefsOperator = [
	'https://www.youtube.com/embed/6D-Pd7HRTyI?si=uVgvFvzLYqiUAC4T',
	'https://www.youtube.com/embed/2HkjrJ6IK5E?si=bXC3n4N9FNutD0Fy',
	'https://www.youtube.com/embed/D1XANQUYSvk?si=-iMCdXH2ymUUjXbS',
]

const videoRefsSound = [
	'https://www.youtube.com/embed/Gc5par5a3jk?si=hHs79TJl4ucn8zZF',
]

const videoRefsAction = [
	'https://www.youtube.com/embed/VgXQhpZulds?si=NbiDVrvHujvXvRa6',
]

const References = () => {
	const { t } = useTranslation()
	const [isOpen, setIsOpen] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)
	const scrollRef = useRef(null)

	const handleKeyDown = useCallback(
		e => {
			if (!isOpen) return
			if (e.key === 'ArrowRight') {
				setCurrentIndex(prev => (prev + 1) % imageRefs.length)
			} else if (e.key === 'ArrowLeft') {
				setCurrentIndex(prev => (prev === 0 ? imageRefs.length - 1 : prev - 1))
			} else if (e.key === 'Escape') {
				setIsOpen(false)
			}
		},
		[isOpen]
	)

	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [handleKeyDown])

	useEffect(() => {
		const el = scrollRef.current
		if (!el) return
		const handleWheel = e => {
			if (e.deltaY === 0) return
			e.preventDefault()
			el.scrollTo({
				left: el.scrollLeft + e.deltaY * 2,
				behavior: 'smooth',
			})
		}
		el.addEventListener('wheel', handleWheel)
		return () => el.removeEventListener('wheel', handleWheel)
	}, [])

	return (
		<section className='max-w-7xl mx-auto px-4 py-10'>
			{/* 🔹 Визуальные референсы */}
			<h2 className='text-2xl font-semibold mb-6 text-gray-900'>
				{t('references.visual')}
			</h2>

			<div
				ref={scrollRef}
				className='flex gap-4 overflow-x-auto scrollbar-hide pb-4'
			>
				{imageRefs.map((src, index) => (
					<Dialog
						key={index}
						open={isOpen && currentIndex === index}
						onOpenChange={setIsOpen}
					>
						<DialogTrigger asChild>
							<img
								src={src}
								alt={`visual reference ${index + 1}`}
								className='rounded-[5px] object-cover cursor-pointer aspect-video w-[300px] flex-shrink-0 hover:opacity-80 transition'
								onClick={() => {
									setCurrentIndex(index)
									setIsOpen(true)
								}}
							/>
						</DialogTrigger>

						<DialogContent className='max-w-6xl bg-black p-0 flex justify-center items-center'>
							<div className='relative w-full flex justify-center items-center'>
								<img
									src={imageRefs[currentIndex]}
									alt='fullscreen reference'
									className='w-full h-auto rounded-lg max-h-[85vh] object-contain'
								/>
								<button
									onClick={() =>
										setCurrentIndex(prev =>
											prev === 0 ? imageRefs.length - 1 : prev - 1
										)
									}
									className='absolute left-3 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2'
								>
									←
								</button>
								<button
									onClick={() =>
										setCurrentIndex(prev => (prev + 1) % imageRefs.length)
									}
									className='absolute right-3 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2'
								>
									→
								</button>
							</div>
						</DialogContent>
					</Dialog>
				))}
			</div>

			{/* 🔹 Видео оператор */}
			<h2 className='text-2xl font-semibold mt-8 mb-6 text-gray-900'>
				{t('references.operator')}
			</h2>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				{videoRefsOperator.map((url, index) => (
					<Card
						key={index}
						className='overflow-hidden rounded-[5px] shadow-md py-0'
					>
						<CardContent className='p-0'>
							<div className='aspect-video'>
								<iframe
									width='100%'
									height='100%'
									src={url}
									title={`Operator reference ${index + 1}`}
									allowFullScreen
									className='rounded-[5px]'
								/>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			{/* 🔹 Видео звукорежиссёр */}
			<h2 className='text-2xl font-semibold mt-8 mb-6 text-gray-900'>
				{t('references.sound')}
			</h2>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				{videoRefsSound.map((url, index) => (
					<Card
						key={index}
						className='overflow-hidden rounded-[5px] shadow-md py-0'
					>
						<CardContent className='p-0'>
							<div className='aspect-video'>
								<iframe
									width='100%'
									height='100%'
									src={url}
									title={`Sound reference ${index + 1}`}
									allowFullScreen
									className='rounded-[5px]'
								/>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			{/* 🔹 Видео боевые сцены */}
			<h2 className='text-2xl font-semibold mt-8 mb-6 text-gray-900'>
				{t('references.action')}
			</h2>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				{videoRefsAction.map((url, index) => (
					<Card
						key={index}
						className='overflow-hidden rounded-[5px] shadow-md py-0'
					>
						<CardContent className='p-0'>
							<div className='aspect-video'>
								<iframe
									width='100%'
									height='100%'
									src={url}
									title={`Action reference ${index + 1}`}
									allowFullScreen
									className='rounded-[5px]'
								/>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	)
}

export default References
