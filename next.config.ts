const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ki-kl.de'],
  },
};

module.exports = withNextIntl(nextConfig);
