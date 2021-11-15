/** @type {import('next').NextConfig} */
const path = require('path');
module.exports = {
  reactStrictMode: true,
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
