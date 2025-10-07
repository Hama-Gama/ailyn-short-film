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
	{ code: 'kz', label: 'Қазақша', flag: 'fi-kz' },
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
				<Button variant='outline' size='icon' className='rounded-full text-gray-600 bg-gray-300'>
					<Globe className='h-5 w-5' />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent align='end'>
				{languages
					.filter(lang => lang.code !== currentLang)
					.map(lang => (
						<DropdownMenuItem
							key={lang.code}
							onClick={() => changeLanguage(lang.code)}
							className='flex items-center gap-2'
						>
							<span className={`fi ${lang.flag} w-5 h-5 rounded-full`} />
							<span>{lang.label}</span>
						</DropdownMenuItem>
					))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
