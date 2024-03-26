/** @type {import('next').NextConfig} */
const nextConfig = {
    exportPathMap: function () {
        return {
          '/': { page: '/' },
          '/about': { page: '/about' },
        };
      },
    output: 'export',
  };
  
  export default nextConfig;