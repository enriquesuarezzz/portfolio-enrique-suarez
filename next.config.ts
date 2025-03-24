import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'www.enriquesuarez.dev',
    },
  ],
}

export default withNextIntl(nextConfig)
