/** @type {import('next').NextConfig} */
import nextPwaBuilder from '@ducanh2912/next-pwa';


const withPWA = nextPwaBuilder({
    dest: 'public',
    /* @ts-expect-error TODO it shows legit errors, fix @Ruslan */
    skipWaiting: true,
    // disable: false,
    disable: process.env.NODE_ENV === 'development',
    reloadOnOnline: true,
    cacheOnFrontendNav: true,
    aggressiveFrontEndNavCaching: true,
    register: true,
    workboxOptions: {
      disableDevLogs: true,
    },
  });

const nextConfig = {};

export default withPWA(nextConfig);
