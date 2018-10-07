import React from 'react'
import classNames from 'classnames'

import './Logo.css'

const Logo = ({
	className,
}) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2088.3 365.4" className={classNames('Logo__svg', className)}>
		<path d="M86 34.2H35.3v297.1H86v34.1H0V.1h86z" className="Logo__bracket"/>
		<path transform="translate(-1055.8 -978)" d="M1466.1 1239.1l23.1 63.7h40.2l-105.9-284.1h-42.6l-106 284.1h40.2l86.9-239" className="Logo__word"/>
		<path d="M629 40.7h37.7v284.1H629z" className="Logo__word"/>
		<path d="M877 78.5c28.4-28.8 63.3-43 104.3-43s75.9 14.2 104.3 43c28.8 28.4 43 63.3 43 104.3s-14.2 75.5-43 104.3c-28.4 28.8-63.3 43-104.3 43s-75.9-14.2-104.3-43c-28.4-28.8-42.6-63.3-42.6-104.3s14.2-75.9 42.6-104.3zm182.2 25.5c-20.7-21.5-46.7-32.1-77.9-32.1-31.2 0-57.2 10.6-78.3 32.1-20.7 21.1-31.2 47.5-31.2 78.7 0 31.2 10.6 57.2 31.2 78.7 21.1 21.1 47.1 31.7 78.3 31.7 31.2 0 57.2-10.6 77.9-31.7 21.1-21.5 31.7-47.5 31.7-78.7 0-31.2-10.6-57.6-31.7-78.7z" className="Logo__word"/>
		<path d="M1357.5 324.8L1256 40.7h40.6l82.4 237 82-237h41l-101.9 284.1z" className="Logo__word"/>
		<path transform="translate(-1055.8 -978)" d="M2883.6 1302.8h40.2l-105.9-284.1h-42.6l-106 284.1h40.2l86.9-239" className="Logo__word"/>
		<path d="M2088.3.1v365.2h-86v-34.1h50.7V34.1h-50.7V0h86z" className="Logo__bracket"/>
	</svg>
)

export default Logo