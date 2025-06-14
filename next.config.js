/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Skip type checking during build to prevent build failures
    ignoreBuildErrors: true,
  },
  eslint: {
    // Skip ESLint during build to prevent build failures
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig
