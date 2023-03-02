/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
};

module.exports = nextConfig;
