import React, { useState } from 'react'
import { FaWhatsapp, FaInstagram, FaTelegramPlane } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react'

const Contacts = () => {
	const { t } = useTranslation()
	const [copied, setCopied] = useState(false)

	const email = 'ardager121@mail.ru'

	const handleCopy = () => {
		navigator.clipboard.writeText(email)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<section id='contacts' className='py-16 bg-gray-50'>
			<div className='max-w-6xl mx-auto px-4'>
				<h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4'>
					{t('contacts.title')}
				</h2>
				<p className='text-center text-gray-600 mb-12'>
					{t('contacts.subtitle')}
				</p>

				<div className='grid md:grid-cols-2 gap-8'>
					{/* Контактная информация */}
					<Card className='shadow-md border-none bg-white'>
						<CardContent className='p-6 flex flex-col gap-6'>
							{/* Email с копированием */}
							<div className='flex items-center gap-3'>
								<Mail className='text-gray-700' />
								<p className='text-gray-800'>{email}</p>
								<button
									onClick={handleCopy}
									className='ml-2 text-gray-500 hover:text-black transition-all'
									title={copied ? t('contacts.copied') : t('contacts.copy')}
								>
									{copied ? (
										<Check className='w-4 h-4 text-green-500' />
									) : (
										<Copy className='w-4 h-4' />
									)}
								</button>
							</div>

							<div className='flex items-center gap-3'>
								<Phone className='text-gray-700' />
								<p className='text-gray-800'>+7 (707) 891 91 81</p>
							</div>

							<div className='flex items-center gap-3'>
								<MapPin className='text-gray-700' />
								<p className='text-gray-800'>{t('contacts.address')}</p>
							</div>

							{/* Соцсети в одну строку */}
							<div className='flex items-center justify-start gap-6 mt-4'>
								<a
									href='https://wa.me/77078919181'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Button
										variant='outline'
										size='icon'
										className='rounded-full border-gray-200 hover:bg-green-50 text-green-600 hover:text-green-700 transition-all'
									>
										<FaWhatsapp size={24} />
									</Button>
								</a>

								<a
									href='https://t.me/hama_gamma'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Button
										variant='outline'
										size='icon'
										className='rounded-full border-gray-200 hover:bg-blue-50 text-blue-500 hover:text-blue-600 transition-all'
									>
										<FaTelegramPlane size={24} />
									</Button>
								</a>

								<a
									href='https://instagram.com/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Button
										variant='outline'
										size='icon'
										className='rounded-full border-gray-200 hover:bg-pink-50 text-pink-600 hover:text-pink-700 transition-all'
									>
										<FaInstagram size={24} />
									</Button>
								</a>
							</div>
						</CardContent>
					</Card>

					{/* Форма */}
					<Card className='shadow-md border-none bg-white'>
						<CardContent className='p-6 space-y-4 text-2xl'>
							<Input
								placeholder={t('contacts.name')}
								className='rounded-[5px]'
							/>
							<Input
								type='email'
								placeholder={t('contacts.email')}
								className='rounded-[5px]'
							/>
							<Textarea
								placeholder={t('contacts.message')}
								className='min-h-[120px] rounded-[5px]'
							/>
							<Button className='w-[200px] bg-black hover:bg-gray-800 text-white rounded-xl flex items-center justify-center gap-2'>
								<Send className='w-4 h-4' /> {t('contacts.send')}
							</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	)
}

export default Contacts
