/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  staticPageGenerationTimeout: 180,
  experimental: {
    webpackBuildWorker: true,
  },
  // Disable ESLint during build (alternative to --no-lint)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;