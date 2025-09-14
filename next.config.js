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
  experimental: {
    // Ensure static files are copied
    outputFileTracingRoot: process.cwd(),
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  // Ensure PDF files are included in the build
  async rewrites() {
    return [];
  },
}

module.exports = nextConfig
