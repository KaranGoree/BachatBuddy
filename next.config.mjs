/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['recharts', 'lucide-react'],
  },
  // Add empty turbopack config
  turbopack: {},
  // Remove any webpack config if present
};

export default nextConfig;