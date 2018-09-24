import React from 'react'

import './Mate.css'

const Mate = ({
	name,
	position,
	linkedin,
}) => (
	<div className="Mate">
		<div className="Mate__name">{name}</div>
		<div className="Mate__position">{position}</div>
		<a className="Mate__linkedin" href={`https://www.linkedin.com/in/${linkedin}`}>
			<img src="/icon/linkedin.svg" alt=""/>
		</a>
	</div>
)

export default Mate