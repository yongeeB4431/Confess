/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: false,
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    MONGO_URI:
      "mongodb+srv://yongeeB4431:adewunmi2017@cluster0.xn5ulln.mongodb.net/?retryWrites=true&w=majority",
  },
};

module.exports = nextConfig;
