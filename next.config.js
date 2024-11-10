/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  output: "export", // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
