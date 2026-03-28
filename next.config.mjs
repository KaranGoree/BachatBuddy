/** @type {import('next').NextConfig} */
const nextConfig = {
  // Basic config
  reactStrictMode: true,
  
  // Build settings
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Image optimization
  images: {
    unoptimized: true,
  },
  
  // Output
  output: 'standalone',
  
  // Increase build timeout
  staticPageGenerationTimeout: 180,
  
  // Disable Turbopack and use webpack
  // @ts-ignore
  experimental: {
    optimizePackageImports: ['recharts', 'lucide-react'],
    // Force webpack build
    webpackBuildWorker: true,
  },
  
  // Remove turbopack config to force webpack
  // turbopack: {}, // REMOVE THIS
  
  // Disable telemetry
  telemetry: false,
  
  trailingSlash: false,
  productionBrowserSourceMaps: false,
};

export default nextConfig;