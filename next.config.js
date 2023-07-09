/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // basePath: isProd ? '/static-blog' : '',
  // assetPrefix: isProd ? '/static-blog/' : '',
  basePath: '',
  images: {
    unoptimized: true,
  },
}
