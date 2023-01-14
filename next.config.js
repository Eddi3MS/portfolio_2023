/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MAILADRESS: process.env.MAILADRESS,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    REFRESH_TOKEN: process.env.REFRESH_TOKEN,
  },
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
