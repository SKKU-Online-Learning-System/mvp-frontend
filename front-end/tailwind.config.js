/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/*.{js, ts, jsx, tsx}',
		'./components/*/*.{js, ts, jsx, tsx}',
	],
	purge: ['./components/**/*.tsx', './components/*.tsx'],
	theme: {
		extend: {},
	},
	plugins: [],
};
