/** @type {import('next').NextConfig} */
const path = require('path');
const withImages = require('next-images');
module.exports = withImages();
module.exports = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true
  },
  webpack(config, options) {
    config.resolve = {
      alias: {
        '@components': path.join(__dirname, 'components'),
        '@interfaces': path.join(__dirname, 'interfaces')
      },
      ...config.resolve
    }
    return config;
  }
}
