import React from 'react'

export default function Footer() {
	return (
		<footer className='mt-auto border-t bg-[#710000] backdrop-blur-md'>
			<div className='max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-300'>
				© {new Date().getFullYear()} Ailyn Film. All rights reserved.
			</div>
		</footer>
	)
}
