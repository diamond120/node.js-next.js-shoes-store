/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["websitedemos.net",process.env.NEXT_PUBLIC_API_HOSTNAME,"secure.gravatar.com"],
  },

  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
