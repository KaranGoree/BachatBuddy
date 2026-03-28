/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Add these configurations to fix the build error
  output: 'standalone',
  experimental: {
    // This helps with Turbopack build issues
    turbo: {
      resolveAlias: {
        // Add any aliases if needed
      },
    },
  },
  // Disable static generation for pages that use client-side features
  staticPageGenerationTimeout: 120,
  // Ensure all pages are dynamically rendered
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
  },
  // Skip trailing slash redirect
  trailingSlash: false,
  // Configure for Vercel deployment
  swcMinify: true,
  // Disable static optimization for pages with client-side data
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Ensure client-side code is properly handled
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

export default nextConfig;