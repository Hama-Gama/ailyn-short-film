import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './components/LanguageSwitcher'




export default function App() {
	const { t } = useTranslation()

	return (
		<div style={{ padding: '20px' }}>
			<LanguageSwitcher />
			<h1>{t('welcome')}</h1>
			<p>{t('buttonText')}</p>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	)
}

