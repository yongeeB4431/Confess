/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint:{
    ignoreDuringBuilds: true,
  },
  typescript:{
    ignoreBuildErrors: true,
  },
  env: {
    "MONGO_URI": "mongodb+srv://yongeeB4431:adewunmi2017@cluster0.xn5ulln.mongodb.net/?retryWrites=true&w=majority"
  },
  webpack(config, options) {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${config.isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    });

    return config;
  },
}

module.exports = nextConfig
