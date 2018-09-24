import React from 'react'

import './Page.css'

const Page = ({
	anchor,
    children,
}) => (
    <div className="Page" id={anchor}>
		<div className="Page__content">
        	{children}
		</div>
    </div>
)

export default Page