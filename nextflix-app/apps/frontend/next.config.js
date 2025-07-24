module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Replace with the domains you want to allow for image optimization
  },
  env: {
    API_URL: process.env.API_URL || 'http://localhost:3000/api', // Backend API URL
  },
  webpack: (config) => {
    // Custom webpack configurations can go here
    return config;
  },
};