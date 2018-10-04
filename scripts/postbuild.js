
const fs = require('fs')
const sh = require('shelljs')

sh.rm('-rf', 'dist/*.js')
sh.rm('-rf', 'dist/*.map')
sh.rm('-rf', 'dist/*.json')
sh.rm('-rf', 'dist/404.html')
sh.rm('-rf', 'dist/templates')
sh.rm('-rf', 'dist/404')

const index = fs.readFileSync('./dist/index.html').toString()
fs.writeFileSync(
	'./dist/index.html',
	index
		.replace(/<link rel="preload" as="script".+?\/>/g, '')
		.replace(/<script(.|\n)+?<\/script>/g, '')
)