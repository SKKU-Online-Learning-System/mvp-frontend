import { DEVICE_BREAKPOINT } from './constants/breakpoint';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	purge: ['./components/**/*.tsx', './components/*.tsx'],
	theme: {
		screens: {
			dt: { max: DEVICE_BREAKPOINT.DESKTOP },
		},
		extend: {},
	},
	plugins: [],
};
