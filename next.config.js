/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // TO ENABLE IMAGES FROM SIGN IN
  images: {
    domains: ['lh3.googleusercontent.com', 'files.stripe.com']
  }
}

module.exports = nextConfig
