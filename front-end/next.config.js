/** @type {import('next').NextConfig} */
const path = require('path');
const withImages = require('next-images');
module.exports = withImages();
module.exports = {
	typescript: {
		// TODO : 타입 다 채워서 이거 빼고도 빌드 되어야함.
		ignoreBuildErrors: true,
	},
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
		config.plugins = [
			// 환경 변수 등록/관리 설정
			new webpack.EnvironmentPlugin({
				API_SERVER: 'process.env.API_SERVER',
				API_SOURCE: 'process.env.API_SOURCE',
			}),
		];
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
