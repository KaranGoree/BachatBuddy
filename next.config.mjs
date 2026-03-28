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
  // Add empty turbopack config to silence the warning
  turbopack: {},
};

export default nextConfig;