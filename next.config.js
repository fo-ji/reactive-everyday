/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.notion.so',
        protocol: 'https'
      },
      {
        hostname: 's3.us-west-2.amazonaws.com',
        protocol: 'https'
      }
    ]
  },
  async redirects() {
    return [
      {
        destination: '/articles',
        permanent: false,
        source: '/'
      }
    ]
  }
}

module.exports = nextConfig
