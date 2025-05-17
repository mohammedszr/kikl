const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ki-kl.org'],
  },
  env: {
    _next_intl_trailing_slash: '/'
  }
};

module.exports = withNextIntl(nextConfig);
