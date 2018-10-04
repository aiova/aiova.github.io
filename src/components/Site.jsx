import React from 'react'

import Video from './Video'
import Header from './Header'
import Footer from './Footer'
import Page from './Page'
import Companies from './Companies'
import Title from './Title'
import Team from './Team'
import Logo from './Logo'
import Features from './Features'
import Opensource from './Opensource'
import About from './About';
import Head from './Head'

import skills from '../data/skills.json'

import './Site.css'

const Site = () => (
    <div className="Site">
		<Head />
        <Video />
		<Header />
		<div className="Site__content">
			<Page>
				<Logo
					className="Site__logo"
				/>
				<Title
					mark="We are"
					title="experts in"
					center
				/>
				<Features
					features={skills}
				/>
			</Page>
			<Page anchor="about">
				<Title
					mark="We build"
					title="scalable high-loaded systems that"
				/>
				<About/>
			</Page>
			<Page anchor="team">
				<Title
					mark="We are"
					center
					colon={false}
				/>
				<Team />
			</Page>
			<Page anchor="wearefrom">
				<Title
					mark="We came from"
					colon={false}
				/>
				<Companies />
			</Page>
			<Page anchor="opensource">
				<Title
					mark="We use and contribute"
					title="to the best open source sof ware"
				/>
				<Opensource />
			</Page>
		</div>
		<Footer />
    </div>
)

export default Site