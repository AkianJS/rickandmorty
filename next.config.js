/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'rickandmortyapi.com'
//       }
//     ],
//     domains: ['rickandmortyapi.com']
//   }
// }

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rickandmortyapi.com'
      }
    ],
    domains: ['rickandmortyapi.com']
  }
}
