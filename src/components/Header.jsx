import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Sling as Hamburger } from 'hamburger-react'
import LanguageSwitcher from '@/components/LanguageSwitcher'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { t } = useTranslation()

	const navLinks = [
		{ label: t('nav.home'), href: '/' },
		{ label: t('nav.about'), href: '#about' },
		// { label: t('nav.director'), href: '#director' },
		// { label: t('nav.screenplay'), href: '#screenplay' },
		{ label: t('nav.team'), href: '#team' },
		{ label: t('nav.news'), href: '#news' },
		{ label: t('nav.contacts'), href: '#contacts' },
		{ label: t('nav.donates'), href: '#donates' },
	]

	// Закрыть меню по Esc
	useEffect(() => {
		const onKey = e => {
			if (e.key === 'Escape') setIsOpen(false)
		}
		document.addEventListener('keydown', onKey)
		return () => document.removeEventListener('keydown', onKey)
	}, [])

	return (
		<header className='fixed top-0 left-0 w-full z-50 bg-transparent py-2 px-4 text-gray-300'>
			{/* DESKTOP HEADER */}
			<div className='hidden md:flex w-full items-center justify-between sm:px-2 lg:px-6'>
				<h2 className='text-gray-300 text-2xl font-bold'>A</h2>

				<nav className='flex gap-4 items-center'>
					{navLinks.map(link => (
						<a key={link.href} href={link.href} className='hover:underline'>
							{link.label}
						</a>
					))}
					<div className='ml-4'>
						<LanguageSwitcher />
					</div>
				</nav>
			</div>

			{/* MOBILE HEADER */}
			<div className='md:hidden relative flex items-center justify-between w-full px-2 py-2'>
				{/* ЛОГО слева */}
				<h2 className='text-gray-300 text-xl font-bold'>A</h2>

				{/* ГЛОБУС по центру */}
				<div className='absolute left-1/2 -translate-x-1/2'>
					<LanguageSwitcher />
				</div>

				{/* БУРГЕР справа — делаем его поверх оверлея по z-index */}
				<div className='relative z-50'>
					<Hamburger
						toggled={isOpen}
						toggle={setIsOpen}
						direction='right'
						color='#fff'
					/>
				</div>
			</div>

			{/* MOBILE OVELAY MENU — рендерим только когда open */}
			{isOpen && (
				<div
					className='min-[801px]:hidden fixed top-0 left-0 w-full h-screen z-40 bg-black/40 backdrop-blur-lg flex items-center justify-center px-6'
					onClick={() => setIsOpen(false)} // клик по фону — закрыть
				>
					<div
						className='text-2xl flex flex-col gap-6 text-center text-white'
						onClick={e => e.stopPropagation()} // клики внутри меню не закрывают
						role='menu'
						aria-label='Mobile navigation'
					>
						{navLinks.map(link => (
							<a
								key={link.href}
								href={link.href}
								onClick={() => setIsOpen(false)}
								className='transition-colors hover:text-gray-300'
							>
								{link.label}
							</a>
						))}

					</div>
				</div>
			)}
		</header>
	)
}

export default Header
