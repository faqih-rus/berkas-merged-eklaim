/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  basePath: '',
  distDir: 'out',
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  }
}

module.exports = nextConfig
