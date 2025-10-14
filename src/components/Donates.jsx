import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Wallet, Coffee, CreditCard } from 'lucide-react'
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

const SupportSection = () => {
	const { t } = useTranslation()
	const [currency, setCurrency] = useState('₸')
	const [isOpen, setIsOpen] = useState(false)
	const [customAmount, setCustomAmount] = useState('')

	const currencyOptions = ['₸', '$', 'Kaspi']

	// ✅ форматирование суммы через пробелы
	const formatNumber = num => num.toLocaleString('ru-RU', { useGrouping: true })

	const getAmount = amount => {
		if (currency === '$') return `$${(amount / 470).toFixed(1)}`
		if (currency === 'Kaspi') return `${formatNumber(amount)} ₸`
		return `${formatNumber(amount)} ₸`
	}

	const donationOptions = [
		{ id: 1, amount: 1000, icon: <Coffee className='w-5 h-5' /> },
		{ id: 2, amount: 5000, icon: <Heart className='w-5 h-5' /> },
		{ id: 3, amount: 10000, icon: <Wallet className='w-5 h-5' /> },
		{ id: 4, amount: 50000, icon: <Wallet className='w-5 h-5' /> },
		{ id: 5, amount: 100000, icon: <Wallet className='w-5 h-5' /> },
	]

	const handleCustomDonate = () => {
		if (!customAmount) return
		console.log(`Пожертвование: ${customAmount} ${currency}`)
		setIsOpen(false)
		setCustomAmount('')
	}

	return (
		<section id='donates' className='py-20 bg-gray-100 text-center'>
			<div className='max-w-4xl mx-auto px-4'>
				<h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900'>
					{t('support.title')}
				</h2>
				<p className='text-gray-600 mb-10 text-lg'>{t('support.subtitle')}</p>

				<Card className='shadow-lg border-gray-100 bg-gray-100 border-gray-300'>
					<CardHeader className='flex flex-col md:flex-row justify-between items-center'>
						<CardTitle className='text-2xl font-semibold text-gray-800'>
							💖 {t('support.helpUs')}
						</CardTitle>

						{/* Переключатель валют */}
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button
									variant='outline'
									className='rounded-xl border-gray-200 text-gray-700 hover:bg-gray-50'
								>
									{t('support.currency')}: {currency}
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align='end'>
								{currencyOptions.map(opt => (
									<DropdownMenuItem
										key={opt}
										onClick={() => setCurrency(opt)}
										className='cursor-pointer'
									>
										{opt}
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
					</CardHeader>

					<CardContent className='flex flex-wrap justify-center gap-8 mt-8'>
						{donationOptions.map(opt => (
							<Button
								key={opt.id}
								variant='outline'
								className='text-lg rounded-xl border-gray-600 px-6 py-4 flex items-center gap-2 hover:bg-pink-50 hover:text-pink-600 transition-all'
							>
								{opt.icon}
								{getAmount(opt.amount)}
							</Button>
						))}
					</CardContent>

					<p className='text-gray-500 text-sm mt-3 mb-3'>{t('support.or')}</p>

					<div className='flex justify-center mb-6'>
						<Button
							disabled
							onClick={() => setIsOpen(true)}
							className='bg-black text-white hover:bg-gray-800 rounded-xl text-lg px-6 py-4 transition-all w-auto opacity-70 cursor-not-allowed'
						>
							{t('support.otherAmount')}
						</Button>
					</div>

					{/* 🔹 Kaspi Gold info (3 строки) */}
					<div className='flex justify-center items-center w-full px-4 mb-10'>
						<div className='bg-gray-100 w-full max-w-sm rounded-xl p-6 shadow-sm border border-gray-300 text-gray-800 text-center'>
							<div className='flex items-center justify-center gap-2 mb-2'>
								<CreditCard className='w-6 h-6 text-red-600' />
								<span className='font-semibold text-2xl'>Kaspi Gold</span>
							</div>
							<p className='text-2xl font-semibold text-gray-900'>
								+7 707 891 91 81
							</p>
							<p className='text-gray-600 text-2xl mt-1'>Хамит А.</p>
						</div>
					</div>
				</Card>
			</div>

			{/* Модальное окно для другой суммы */}
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent className='sm:max-w-md'>
					<DialogHeader>
						<DialogTitle>{t('support.enterAmount')}</DialogTitle>
					</DialogHeader>

					<div className='flex flex-col gap-4'>
						<Input
							type='text'
							inputMode='numeric'
							value={customAmount}
							onChange={e => {
								const rawValue = e.target.value.replace(/\D/g, '')
								const formatted = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
								setCustomAmount(formatted)
							}}
							placeholder={t('support.amountPlaceholder')}
							className='text-lg'
						/>
						<p className='text-gray-500 text-sm'>
							{t('support.selectedCurrency')}: <b>{currency}</b>
						</p>
					</div>

					<DialogFooter className='mt-4'>
						<Button
							onClick={handleCustomDonate}
							className='bg-black text-white hover:bg-gray-800 rounded-xl'
						>
							{t('support.confirm')}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</section>
	)
}

export default SupportSection
