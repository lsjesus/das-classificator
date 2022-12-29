/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  basePath: "/das-classificator",
  assetPrefix: "/das-classificator",
  images: {

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: ''
      }
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
      config.resolve.fallback.tls = false
      config.resolve.fallback.net = false
      config.resolve.fallback.child_process = false
    }

    return config
  },
  
  future: {
    webpack5: true,
  },
  fallback: {
    fs: false,
    tls: false,
    net: false,
    child_process: false
  },
  env: {
    REACT_APP_SPREADSHEET_ID: process.env.REACT_APP_SPREADSHEET_ID,
    REACT_APP_SHEET_ID: process.env.REACT_APP_SHEET_ID,
    REACT_APP_GOOGLE_CLIENT_EMAIL: process.env.REACT_APP_GOOGLE_CLIENT_EMAIL,
    REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY: process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY
  },
}
