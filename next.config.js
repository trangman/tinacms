/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['tinacms'],
  },
  // Suppress hydration warnings for browser extension interference
  reactStrictMode: false,
  // Disable static optimization for pages that might have hydration issues
  trailingSlash: false,
}

module.exports = nextConfig
