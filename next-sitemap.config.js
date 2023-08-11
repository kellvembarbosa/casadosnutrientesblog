/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_BASE_API_URL || 'http://localhost:3000',
    generateRobotsTxt: true, // (optional)
    // ...other options
  }