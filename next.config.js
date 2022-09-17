/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["img.travelfeed.io"],
  },
};

module.exports = nextConfig;
