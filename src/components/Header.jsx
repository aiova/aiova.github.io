import React from 'react'

import Logo from './Logo'
import Menu from './Menu'

import './Header.css'

const Header = () => (
    <div className="Header">
        <div className="Content Header__content">
			<a className="Header__logo plain" href="/#">
            	<Logo />
			</a>
            <Menu />
        </div>
    </div>
)

export default Header