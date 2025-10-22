import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import React from 'react'
import { useTranslation } from 'react-i18next'




export default function App() {
	const { t } = useTranslation()

	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</div>
	)
}

