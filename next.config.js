/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'terno-do-binga.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/**/**',
      },
    ],
  },
}

module.exports = nextConfig
