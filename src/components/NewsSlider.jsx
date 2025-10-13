import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const NewsSlider = () => {
	const { t } = useTranslation()

	const newsItems = [
		{
			id: 1,
			type: 'video',
			title: t('sections.news.videoTitle'),
			description: t('sections.news.videoDesc'),
			thumbnail: '/thumbnails/news-1.jpg',
			link: 'https://www.youtube.com/embed/LUm8yQT1QTQ?si=TdofTHYETlXdqr1k',
		},
		{
			id: 2,
			type: 'podcast',
			title: t('sections.news.podcastTitle'),
			description: t('sections.news.podcastDesc'),
			thumbnail: '/thumbnails/podcast-1.jpg',
			link: 'https://spotify.com',
		},
		{
			id: 3,
			type: 'backstage',
			title: t('sections.news.backstageTitle'),
			description: t('sections.news.backstageDesc'),
			thumbnail: '/thumbnails/backstage-1.jpg',
			link: '#',
		},
		{
			id: 4,
			type: 'article',
			title: t('sections.news.articleTitle'),
			description: t('sections.news.articleDesc'),
			thumbnail: '/thumbnails/news-placeholder.jpeg',
			link: '#',
		},
	]

	return (
		<section id='news' className='py-16 bg-gray-100 text-white'>
			<div className='container mx-auto px-6'>
				<h2 className='text-black text-3xl md:text-4xl font-bold mb-8 text-center'>
					{t('sections.news.title')}
				</h2>

				<Swiper
					modules={[Pagination]}
					slidesPerView={1.2}
					centeredSlides={false}
					loop={false}
					spaceBetween={10}
					breakpoints={{
						640: { slidesPerView: 2.2 },
						768: { slidesPerView: 2.2 },
						1024: { slidesPerView: 2.5 },
					}}
					className='news-swiper'
				>
					{newsItems.map(item => (
						<SwiperSlide key={item.id}>
							<a
								href={item.link}
								target='_blank'
								rel='noopener noreferrer'
								className='group block bg-black rounded-[10px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'
							>
								<div className='relative w-full h-56 overflow-hidden'>
									<img
										src={item.thumbnail}
										alt={item.title}
										className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-500'
									/>
									<span className='absolute top-2 left-2 bg-white/20 backdrop-blur-md text-xs uppercase px-2 py-1 rounded-full'>
										{t(`sections.news.${item.type}`)}
									</span>
								</div>
								<div className='p-4'>
									<h3 className='text-lg font-semibold mb-2 group-hover:text-yellow-300 transition-colors'>
										{item.title}
									</h3>
									<p className='text-sm text-gray-300'>{item.description}</p>
								</div>
							</a>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default NewsSlider
