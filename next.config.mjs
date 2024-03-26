/** @type {import('next').NextConfig} */
const nextConfig = {
  async generateStaticParams() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      // Add other paths as needed
    };
  },
  output: 'export', // or 'script' based on your deployment requirements
};

export default nextConfig;
