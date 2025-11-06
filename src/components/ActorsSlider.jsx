import React from 'react'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Instagram, Send } from 'lucide-react'

const ActorsSlider = () => {
	const { t } = useTranslation()

	const actors = [
		// {
		// 	name: t('actors.names.khamit'),
		// 	role: t('actors.mainRole'),
		// 	img: '/actors/1.jpg',
		// 	telegram: 'https://t.me/hama_gamma',
		// 	instagram: 'https://www.instagram.com/hama_gamma/',
		// },
		{
			name: t('actors.names.aliya'),
			role: t('actors.supporting'),
			img: '/placeholders/lady.jpg',
			telegram: 'https://web.telegram.org/',
			instagram: 'https://instagram.com/',
		},
		{
			name: t('actors.vacant'),
			role: t('actors.secondary'),
			img: '/placeholders/men.jpg',
			telegram: 'https://web.telegram.org/',
			instagram: 'https://instagram.com/',
		},
		{
			name: t('actors.vacant'),
			role: t('actors.secondary'),
			img: '/placeholders/men.jpg',
			telegram: 'https://web.telegram.org/',
			instagram: 'https://instagram.com/',
		},
		{
			name: t('actors.vacant'),
			role: t('actors.secondary'),
			img: '/placeholders/men.jpg',
			telegram: 'https://web.telegram.org/',
			instagram: 'https://instagram.com/',
		},
	]

	return (
		<section className='py-2 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4'>
				<h2 className='text-3xl font-bold mb-6 text-center text-gray-900'>
					{t('actors.title')}
				</h2>

				<Swiper
					modules={[Pagination]}
					spaceBetween={10}
					slidesPerView={1.2}
					breakpoints={{
						640: { slidesPerView: 2 },
						768: { slidesPerView: 3 },
						1024: { slidesPerView: 4 },
					}}
					pagination={{ clickable: true }}
					className='pb-10'
				>
					{actors.map((actor, index) => (
						<SwiperSlide key={index}>
							<Card className='shadow-md hover:shadow-lg transition rounded-xl bg-white m-0 mb-10'>
								<CardContent className='flex flex-col items-center p-2 text-center'>
									<img
										src={actor.img}
										alt={actor.name}
										className='w-32 h-32 rounded-full object-cover mb-4 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300'
									/>
									<h3 className='text-xl font-semibold text-gray-900'>
										{actor.name}
									</h3>
									<p className='text-gray-600 mt-1'>{actor.role}</p>

									<div className='flex gap-3 mt-4'>
										<a
											href={actor.telegram}
											target='_blank'
											rel='noopener noreferrer'
										>
											<Button
												variant='outline'
												size='icon'
												className='rounded-full hover:bg-blue-50 transition-all'
											>
												<Send size={18} />
											</Button>
										</a>
										<a
											href={actor.instagram}
											target='_blank'
											rel='noopener noreferrer'
										>
											<Button
												variant='outline'
												size='icon'
												className='rounded-full hover:bg-pink-50 transition-all'
											>
												<Instagram size={18} />
											</Button>
										</a>
									</div>
								</CardContent>
							</Card>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default ActorsSlider
