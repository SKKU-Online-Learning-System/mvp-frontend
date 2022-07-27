/** @type {import('next').NextConfig} */
const path = require('path');
const withImages = require('next-images');
module.exports = withImages();
module.exports = {
	reactStrictMode: true,
	async rewrite() {
		return [
			{
				source: '/',
				destination: process.env.NEXT_PUBLIC_API_SERVER, // cors 문제 해결 위해서 임시 설정.
			},
		];
	},
	images: {
		disableStaticImages: true,
	},
	webpack(config, options) {
		config.resolve = {
			alias: {
				'@apis': path.join(__dirname, 'apis'),
				'@components': path.join(__dirname, 'components'),
				'@interfaces': path.join(__dirname, 'interfaces'),
			},
			...config.resolve,
		};
		return config;
	},
};
