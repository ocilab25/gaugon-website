/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Deploying to GitHub Pages subdirectory
  basePath: '/gaugon-website',
  trailingSlash: true,
};

export default nextConfig;

