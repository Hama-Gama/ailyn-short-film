import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Sling as Hamburger } from 'hamburger-react'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { Link } from 'react-router-dom'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const { t } = useTranslation()

	const navLinks = [
		{ label: t('nav.home'), href: '/' },
		{ label: t('nav.about'), href: '#about' },
		{ label: t('nav.team'), href: '#team' },
		{ label: t('nav.news'), href: '#news' },
		{ label: t('nav.contacts'), href: '#contacts' },
		{ label: t('nav.donates'), href: '#donates' },
	]

	// 👉 Закрытие меню по ESC
	useEffect(() => {
		const onKey = e => e.key === 'Escape' && setIsOpen(false)
		document.addEventListener('keydown', onKey)
		return () => document.removeEventListener('keydown', onKey)
	}, [])

	// 👉 Изменение состояния при скролле
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// 👉 Блокировка скролла при открытии меню
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
	}, [isOpen])

	return (
		<header
			className={`fixed top-0 left-0 w-full z-50 py-2 px-0 transition-all duration-500 ease-in-out ${
				scrolled
					? 'bg-black/70 backdrop-blur-md shadow-sm opacity-100'
					: 'bg-transparent opacity-90'
			}`}
			style={{
				transitionProperty:
					'background-color, backdrop-filter, box-shadow, opacity',
			}}
		>
			{/* DESKTOP HEADER */}
			<div className='hidden md:flex w-full items-center justify-between sm:px-2 lg:px-6'>
				<Link to='/'>
					<img src='/logo.png' alt='Logo' className='h-10 p-1' />
				</Link>

				<nav className='flex gap-6 items-center text-gray-200'>
					{navLinks.map(link => (
						<a
							key={link.href}
							href={link.href}
							className='hover:text-white transition-colors'
						>
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
				<Link to='/'>
					<img src='/logo.png' alt='Logo' className='h-10 p-1' />
				</Link>

				<div className='absolute left-1/2 -translate-x-1/2'>
					<LanguageSwitcher />
				</div>

				<div className='relative z-50'>
					<Hamburger
						toggled={isOpen}
						toggle={setIsOpen}
						direction='right'
						color='#fff'
					/>
				</div>
			</div>

			{/* MOBILE OVERLAY MENU */}
			{isOpen && (
				<div
					className='min-[801px]:hidden fixed top-0 left-0 w-full h-screen z-40 
          bg-black/90 backdrop-blur-[450px]
          flex items-center justify-center px-6 
          transition-all duration-500 ease-in-out'
					onClick={() => setIsOpen(false)}
				>
					<div
						className='text-2xl flex flex-col gap-8 text-center text-white'
						onClick={e => e.stopPropagation()}
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
