/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        destination: '/articles',
        permanent: true,
        source: '/'
      }
    ]
  },
  swcMinify: true
}

module.exports = nextConfig
