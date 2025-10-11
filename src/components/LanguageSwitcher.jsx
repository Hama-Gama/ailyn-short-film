import { useTranslation } from 'react-i18next'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

const languages = [
	{ code: 'en', label: 'English', flag: 'fi-gb' },
	{ code: 'ru', label: 'Русский', flag: 'fi-ru' },
	{ code: 'kk', label: 'Қазақша', flag: 'fi-kz' },
]

export default function LanguageSwitcher() {
	const { i18n } = useTranslation()
	const currentLang = i18n.language || 'ru'

	const changeLanguage = lng => {
		i18n.changeLanguage(lng)
		localStorage.setItem('lang', lng)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='ghost'
					size='icon'
					className='bg-transparent hover:bg-transparent text-gray-200 hover:text-white focus:ring-0 focus:outline-none'
				>
					<Globe className='!w-8 !h-8 text-gray-300 transition-transform duration-200 hover:scale-110 rounded-full' />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent
				align='end'
				className='bg-white/90 backdrop-blur-md shadow-md border border-gray-200 rounded-md'
			>
				{languages
					.filter(lang => lang.code !== currentLang)
					.map(lang => (
						<DropdownMenuItem
							key={lang.code}
							onClick={() => changeLanguage(lang.code)}
							className='flex items-center gap-2 cursor-pointer'
						>
							<span className={`fi ${lang.flag} w-8 h-8 rounded-full`} />
							<span>{lang.label}</span>
						</DropdownMenuItem>
					))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
