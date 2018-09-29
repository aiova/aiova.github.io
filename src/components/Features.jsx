import React from 'react'

import './Features.css'

const Features = ({
	features,
}) => (
	<div className="Features">
		{features.map(feature => (
			<div key={feature} className="Feature">{feature}</div>
		))}
	</div>
)

export default Features