/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Deploying to custom domain app.gaugon.com (no basePath needed)
  trailingSlash: true,
};

export default nextConfig;

