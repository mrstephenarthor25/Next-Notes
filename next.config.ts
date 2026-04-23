import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  eslint:{
    ignoreDuringBuilds:true
  },

  // async redirects(){
  //   return [
  //     {  
  //       source:"/:path*",
  //       has:[
  //         {
  //           type:'host',
  //           value:'ags-je65.vercel.app'
  //         }
  //       ],
  //       destination:"https://awhemeronglobalservices.com.ng/:path*",
  //       permanent:true
  //     }
  //   ]
  // }
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)