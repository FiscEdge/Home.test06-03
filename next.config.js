/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure Environment Variables
  env: {
    // These will be replaced with actual environment variables during deployment
    API_URL: process.env.API_URL || 'http://localhost:3000/api',
  },
  // Configure image domains if you're using next/image with external sources
  images: {
    domains: ['fiscedge.s3.amazonaws.com'],
  },
}

module.exports = nextConfig;
