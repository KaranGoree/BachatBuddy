import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Type checking - these are valid in Next.js 16
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Image optimization
  images: {
    unoptimized: true,
  },
  
  // Output format
  output: 'standalone',
  
  // Build optimization
  staticPageGenerationTimeout: 180,
  
  // Experimental features (valid in Next.js 16)
  experimental: {
    optimizePackageImports: ['recharts', 'lucide-react'],
    webpackBuildWorker: true,
  },
  
  // Remove these deprecated options:
  // eslint: { ignoreDuringBuilds: true },  // ❌ REMOVED
  // telemetry: false,                       // ❌ REMOVED
  // reactStrictMode: true,                  // ❌ REMOVED (moved to compiler)
}

export default nextConfig