import React from 'react'

import './Opensource.css'

import projects from '../data/opensource.js'

const Opensource = () => (
	<div className="Opensource">
		{projects.map(({ name, image, github }) => (
			<a href={`https://github.com/${github}`} className="Opensource__link">
				{image ? (
					<img src={`/opensource/${image}`} alt={name} className="Opensource__image"/>
				) : (
					<span className="Opensource__name">{name}</span>
				)}
			</a>
		))}
	</div>
)

export default Opensource