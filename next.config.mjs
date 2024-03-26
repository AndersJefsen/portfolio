/** @type {import('next').NextConfig} */
const nextConfig = {
    exportPathMap: function () {
        return {
          '/': { page: '/' },
          '/about': { page: '/about' },
        };
      },
    output: 'out',
  };
  
  export default nextConfig;