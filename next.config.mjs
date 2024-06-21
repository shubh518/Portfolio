/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol:"https",
        hostname:"images.pexels.com",
    
      },
      {
        protocol:"https",
        hostname:"earthly.dev",
    
      },
      {
        protocol:"https",
        hostname:"repository-images.githubusercontent.com",
    
      },
      {
        protocol:"https",
        hostname:"initiate.alphacoders.com",
    
      },
      {
        protocol:"https",
        hostname:"miro.medium.com",
    
      },
      
      {
        protocol:"https",
        hostname:"external-preview.redd.it",
    
      },
      {
        protocol:"https",
        hostname:"bs-uploads.toptal.io",
    
      },
      {
        protocol:"https",
        hostname:"media.licdn.com",
    
      },
      {
        protocol:"https",
        hostname:"www.kosli.com",
    
      },
      
      
      
      
      
    ],
  },
};

export default nextConfig;