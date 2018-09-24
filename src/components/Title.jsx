import React from 'react'
import classNames from 'classnames'

import Mark from './Mark'

import './Title.css'

const Title = ({
	mark,
	title,
	colon = true,
	center = false,
}) => (
	<div className={classNames('Title', {
		'Title_center': center
	})}>
		<Mark>{mark}</Mark>
		{' '}
		{title}
		<span className="Title__colon">{colon && ':'}</span>
	</div>
)

export default Title