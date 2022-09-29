/** @type {import('next').NextConfig} */
const path = require('path');
const withImages = require('next-images');
module.exports = withImages();
module.exports = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: process.env.API_SOURCE,
				destination: `${process.env.API_SERVER}/:path*`,
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
	async redirects() {
		return [
			{
				source: '/my-page',
				destination: '/my-page/history', // Matched parameters can be used in the destination
				permanent: true,
			},
		];
	},
};
