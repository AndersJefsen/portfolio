/** @type {import('next').NextConfig} */
const nextConfig = {
    exportPathMap: function () {
      return {
        '/': { page: '/' },
      };
    },
    output: 'out',
  };
  
  export default nextConfig;