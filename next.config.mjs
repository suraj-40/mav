/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/atoms',
        destination: '/atoms-e-learning-portal',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
