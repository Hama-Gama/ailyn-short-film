import React, { useState, useRef } from 'react'
import ReactInputMask from 'react-input-mask'
import emailjs from '@emailjs/browser'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const TeamRecruitment = () => {
	const { t } = useTranslation()
	const formRef = useRef()
	const [isOpen, setIsOpen] = useState(false)
	const [isSending, setIsSending] = useState(false)
	const [sentSuccess, setSentSuccess] = useState(false)

	const roles = [
		'producer',
		'director',
		'stunt_actor',
		'fight_coordinator',
		'videographer',
		'sound_engineer',
		'actors',
		'action_operator',
		'lighting',
		'pyrotechnician',
		'production_designer',
		'vfx_editor',
		'script_supervisor',
		'onset_editor',
		'makeup_artist',
		'costume_designer',
		'storyboard_artist',
		'composer',
		'bts_operator',
		'smm_marketer',
	]

	const handleSubmit = async e => {
		e.preventDefault()
		setIsSending(true)
		setSentSuccess(false)

		try {
			await emailjs.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				formRef.current,
				import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			)

			setSentSuccess(true)
			e.target.reset()
		} catch (error) {
			console.error('Ошибка при отправке:', error)
			alert('Ошибка при отправке письма. Попробуйте снова.')
		} finally {
			setIsSending(false)
		}
	}

	return (
		<section
			id='team'
			className='w-full bg-gray-50 py-8 mb-16 pt-8 pb-4 px-0 lg:px-8'
		>
			<div className='max-w-4xl mx-auto'>
				<Card className='shadow-lg border border-gray-200'>
					<CardHeader>
						<CardTitle className='text-3xl font-bold text-center'>
							🎥 {t('team.title')}
						</CardTitle>
					</CardHeader>

					<CardContent>
						<div className='grid sm:grid-cols-2 gap-3 mt-2'>
							{roles.map(role => (
								<button
									key={role}
									className='
										w-full text-left px-4 py-3 rounded-xl 
										bg-white hover:bg-gray-100 
										shadow-sm hover:shadow-md 
										transition-all border border-gray-100
										font-medium text-gray-800
										focus:outline-none
										active:scale-[0.98]
									'
								>
									{t(`team.roles.${role}`)}
								</button>
							))}
						</div>

						<div className='mt-10 text-center'>
							<p className='text-gray-600 mb-4 text-lg'>
								💰 {t('team.salary')}
							</p>
							<Button
								size='lg'
								className='bg-black text-white hover:bg-gray-800 transition-all'
								onClick={() => setIsOpen(true)}
							>
								{t('team.apply')}
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>

			{/* 🔹 POPUP форма */}
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent className='max-w-lg w-full bg-white rounded-2xl p-6'>
					<DialogHeader>
						<DialogTitle className='text-2xl font-semibold text-gray-900 text-center'>
							{t('team.formTitle')}
						</DialogTitle>
					</DialogHeader>

					<form ref={formRef} onSubmit={handleSubmit} className='space-y-4'>
						{/* ФИ */}
						<div>
							<label className='block text-gray-700 mb-1'>
								{t('team.form.fullName')}
							</label>
							<Input
								type='text'
								name='user_name'
								required
								placeholder={t('team.form.fullNamePlaceholder')}
							/>
						</div>

						{/* Телефон */}
						<div>
							<label className='block text-gray-700 mb-1'>
								{t('team.form.phone')}
							</label>
							<Input
								type='tel'
								name='user_phone'
								required
								placeholder='+7 (___) ___ __ __'
								maxLength={18}
								onInput={e => {
									let value = e.target.value.replace(/\D/g, '') // только цифры
									if (value.startsWith('7')) value = value.slice(1) // убираем лишнюю 7, если пользователь сам ввел
									if (value.length > 10) value = value.slice(0, 10) // максимум 10 цифр

									const formatted = value
										? `+7 (${value.slice(0, 3)}${
												value.length > 3 ? ') ' : ''
										  }${value.slice(3, 6)}${
												value.length > 6 ? ' ' : ''
										  }${value.slice(6, 8)}${
												value.length > 8 ? ' ' : ''
										  }${value.slice(8, 10)}`
										: '+7 '

									e.target.value = formatted
								}}
							/>
						</div>

						{/* Email */}
						<div>
							<label className='block text-gray-700 mb-1'>
								{t('team.form.email')}
							</label>
							<Input
								type='email'
								name='user_email'
								required
								placeholder='myemail@gmail.com'
							/>
						</div>

						{/* Роль */}
						<div>
							<label className='block text-gray-700 mb-1'>
								{t('team.form.role')}
							</label>
							<Input
								type='text'
								name='user_position'
								required
								placeholder={t('team.form.rolePlaceholder')}
							/>
						</div>

						{/* Сообщение */}
						<div>
							<label className='block text-gray-700 mb-1'>
								{t('team.form.message')}
							</label>
							<Textarea
								name='user_comment'
								rows='4'
								placeholder={t('team.form.messagePlaceholder')}
							/>
						</div>

						<Button
							type='submit'
							disabled={isSending}
							className='w-full bg-black text-white hover:bg-gray-800 transition-all'
						>
							{isSending ? t('team.form.sending') : t('team.form.submit')}
						</Button>

						{sentSuccess && (
							<p className='text-green-600 text-center mt-2'>
								✅ {t('team.form.success')}
							</p>
						)}
					</form>
				</DialogContent>
			</Dialog>
		</section>
	)
}

export default TeamRecruitment
