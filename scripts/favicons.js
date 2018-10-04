const fs = require('fs')
const sh = require('shelljs')

const favicons = require('favicons');
const site = require('../src/data/site.json')
const pkg = require('../package.json')

const getJsx = (html) => `import React from 'react'

const Favions = () => (
	<React.Fragment>
${html}
	</React.Fragment>
)

export default Favions`

const source = './src/favicon.svg';
const configuration = {
		path: "/favicons/",
		appName: pkg.name,
		appDescription: site.title,
		developerName: 'yepninja',
		developerURL: null,
		dir: "auto",
		lang: "en-US",
		background: "#fff",
		theme_color: site.color,
		appleStatusBarStyle: "black-translucent",
		display: "standalone",
		orientation: "any",
		scope: "/",
		start_url: "/",
		version: "1.0",
		logging: false,
		icons: {
			android: true,
			appleIcon: true,
			appleStartup: true,
			coast: true,
			favicons: true,
			firefox: true,
			windows: true,
			yandex: true
		}
	};
const callback = (error, res) => {
	if (error) {
		console.log(error.message);
		return;
	}
	sh.mkdir('./dist/favicons')
	res.images
		.concat(res.files)
		.forEach(f => {
			fs.writeFileSync(`./dist/favicons/${f.name}`, f.contents)
		})

	// const html =
	// 	res.html
	// 		.map(f => `\t\t${f.replace('>', ' />')}`)
	// 		.join('\n')
	// fs.writeFileSync('./src/components/Favicons.jsx', getJsx(html))
};

favicons(source, configuration, callback);