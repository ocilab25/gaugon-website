/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/gaugon-website',
  assetPrefix: '/gaugon-website/',
};

export default nextConfig;
