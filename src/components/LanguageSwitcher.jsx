// src/components/LanguageSwitcher.jsx
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

const languages = [
	{ code: 'en', label: 'English', flag: '🇬🇧' },
	{ code: 'ru', label: 'Русский', flag: '🇷🇺' },
	{ code: 'de', label: 'Deutsch', flag: '🇩🇪' },
]

export default function LanguageSwitcher() {
	const { i18n } = useTranslation()

	// Найдём текущий язык (если не найден — берем первый)
	const currentCode = i18n.resolvedLanguage || languages[0].code
	const otherLangs = languages.filter(l => l.code !== currentCode)

	const changeLanguage = lng => {
		i18n.changeLanguage(lng)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				{/* Глобус НЕ трогаем — он остаётся как есть */}
				<Button
					variant='outline'
					size='icon'
					className='rounded-full w-10 h-10 flex items-center justify-center shadow-sm'
					aria-label='Select language'
				>
					<Globe className='h-5 w-5' />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent
				align='end'
				sideOffset={8}
				className='w-40 rounded-lg shadow-lg'
			>
				{otherLangs.length > 0 ? (
					otherLangs.map(lang => (
						<DropdownMenuItem
							key={lang.code}
							onClick={() => changeLanguage(lang.code)}
							className='flex items-center gap-2 text-base cursor-pointer hover:bg-accent/10'
						>
							<span className='text-lg'>{lang.flag}</span>
							<span>{lang.label}</span>
						</DropdownMenuItem>
					))
				) : (
					// Если других языков нет — можно показать неактивную подсказку
					<div className='p-2 text-sm text-muted-foreground'>
						No other languages
					</div>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
