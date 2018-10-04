import React from 'react'
import {Helmet} from "react-helmet"

import site from '../data/site.json'

const Head = () => (
	<Helmet>
		<link rel="shortcut icon" href="/favicons/favicon.ico" />
		<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
		<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
		<link rel="manifest" href="/favicons/manifest.json" />
		<meta name="mobile-web-app-capable" content="yes" />
		<meta name="theme-color" content="#fff" />
		<meta name="application-name" content="react-static-example-basic" />
		<link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-touch-icon-57x57.png" />
		<link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-touch-icon-60x60.png" />
		<link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-touch-icon-72x72.png" />
		<link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-touch-icon-76x76.png" />
		<link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-touch-icon-114x114.png" />
		<link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-touch-icon-120x120.png" />
		<link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-touch-icon-144x144.png" />
		<link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-touch-icon-152x152.png" />
		<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon-180x180.png" />
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
		<meta name="apple-mobile-web-app-title" content="react-static-example-basic" />
		<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)" href="/favicons/apple-touch-startup-image-320x460.png" />
		<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)" href="/favicons/apple-touch-startup-image-640x920.png" />
		<link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" href="/favicons/apple-touch-startup-image-640x1096.png" />
		<link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" href="/favicons/apple-touch-startup-image-750x1294.png" />
		<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)" href="/favicons/apple-touch-startup-image-1182x2208.png" />
		<link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)" href="/favicons/apple-touch-startup-image-1242x2148.png" />
		<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)" href="/favicons/apple-touch-startup-image-748x1024.png" />
		<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)" href="/favicons/apple-touch-startup-image-768x1004.png" />
		<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)" href="/favicons/apple-touch-startup-image-1496x2048.png" />
		<link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)" href="/favicons/apple-touch-startup-image-1536x2008.png" />
		<link rel="icon" type="image/png" sizes="228x228" href="/favicons/coast-228x228.png" />
		<meta name="msapplication-TileColor" content="#fff" />
		<meta name="msapplication-TileImage" content="/favicons/mstile-144x144.png" />
		<meta name="msapplication-config" content="/favicons/browserconfig.xml" />
		<link rel="yandex-tableau-widget" href="/favicons/yandex-browser-manifest.json" />
		<meta charSet="utf-8" />
		<title>{site.title}</title>
	</Helmet>
)

export default Head