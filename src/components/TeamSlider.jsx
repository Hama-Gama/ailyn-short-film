import React from 'react'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Instagram, Send } from 'lucide-react'

const TeamSlider = () => {
	const { t } = useTranslation()

	const teamMembers = [
		{
			name: 'Аскар Ильясов',
			role: t('team.producer'),
			img: '/sliders-team/1.jpg',
			telegram: '#',
			instagram: '#',
			free: false,
		},
		{
			name: 'Место свободно',
			role: t('team.director'),
			img: '/sliders-team/2.jpg',
			telegram: '#',
			instagram: '#',
			free: true,
		},
		{
			name: 'Место свободно',
			role: t('team.writer'),
			img: '/sliders-team/2.jpg',
			telegram: '#',
			instagram: '#',
			free: true,
		},
		{
			name: 'Место свободно',
			role: t('team.stunt'),
			img: '/sliders-team/2.jpg',
			telegram: '#',
			instagram: '#',
			free: true,
		},
		{
			name: 'Место свободно',
			role: t('team.cinematographer'),
			img: '/sliders-team/2.jpg',
			telegram: '#',
			instagram: '#',
			free: true,
		},
		{
			name: 'Место свободно',
			role: t('team.sound'),
			img: '/sliders-team/2.jpg',
			telegram: '#',
			instagram: '#',
			free: true,
		},
	]

	return (
		<section className='py-12 bg-gray-50'>
			<div className='max-w-7xl mx-auto px-4'>
				<h2 className='text-3xl font-bold mb-8 text-center text-gray-900'>
					{t('team.title')}
				</h2>

				<Swiper
					modules={[ Pagination]}
					spaceBetween={20}
					slidesPerView={1.2}
					breakpoints={{
						640: { slidesPerView: 2 },
						768: { slidesPerView: 3 },
						1024: { slidesPerView: 4 },
					}}
					navigation
					pagination={{ clickable: true }}
					className='pb-10'
				>
					{teamMembers.map((member, index) => (
						<SwiperSlide key={index}>
							<Card className='shadow-md hover:shadow-lg transition rounded-xl bg-white'>
								<CardContent className='flex flex-col items-center p-6 text-center'>
									<img
										src={member.img}
										alt={member.name}
										className='w-32 h-32 rounded-full object-cover mb-4 border border-gray-200'
									/>
									<h3 className='text-xl font-semibold text-gray-900'>
										{member.name}
									</h3>
									<p className='text-gray-600 mt-1'>{member.role}</p>

									{member.free && (
										<p className='text-red-400 font-semibold mt-2'>
											{t('team.vacant')}
										</p>
									)}

									<div className='flex gap-3 mt-4'>
										<a
											href={member.telegram}
											target='_blank'
											rel='noopener noreferrer'
										>
											<Button
												variant='outline'
												size='icon'
												className='rounded-full'
											>
												<Send size={18} />
											</Button>
										</a>
										<a
											href={member.instagram}
											target='_blank'
											rel='noopener noreferrer'
										>
											<Button
												variant='outline'
												size='icon'
												className='rounded-full'
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

export default TeamSlider
