import React from 'react'

import './Companies.css'

const Companies = () => (
	<div className="Companies">
		<a className="Company" href="https://yandex.ru/company">
			<img
				className="Company__image"
				src="/company/yandex.svg"
				alt="Yandex"
			/>
		</a>
		<a className="Company" href="https://richrelevance.com/">
			<img
				className="Company__image"
				src="/company/rr.png"
				alt="rechrelevance"
			/>
		</a>
		<a className="Company" href="https://sematext.com">
			<img
				className="Company__image"
				src="/company/sematext.svg"
				alt="sematext"
			/>
		</a>
		<a className="Company" href="https://aol.com">
			<img
				className="Company__image"
				src="/company/aol.png"
				alt="Aol."
			/>
		</a>
	</div>
)

export default Companies