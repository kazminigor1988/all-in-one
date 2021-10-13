/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/all-in-one/out/' : '',
  basePath: isProd ? '/all-in-one/out' : '',
  publicRuntimeConfig: {
    staticFolder: isProd ? '/static' : '',
  },
}
