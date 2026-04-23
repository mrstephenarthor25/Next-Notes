import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
      <meta name="google-site-verification" content="wq2q6NCR9OU6GFsEXRzcUkcXItuv6gHSptducnPBFjg" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100vh] p-0 m-0 overflow-x-hidden`}
      >
        {/* Organization schema */}
        <script 
        type = "application/ld+json"
        dangerouslySetInnerHTML={{
          __html:JSON.stringify({
            "@context":"https://schema.org",
            "@type":"EducationalOrganization",
            "name":"WebDevBySteve",
            "url":"https://webdevbysteve.online",
            "logo":"https://webdevbysteve.online/icon.png",
            "image":"https://webdevbysteve.online/opengraph-image.png",
            "description":"WebDevBySteve is an online learning platform that helps beginners learn web development through structured tutorials, detailed guides, and live mentorship.",
            "founder":{
              "@type":"Person",
              "name":"Arthor Stephen"
            },
            "KnowsAbout":[
              "Web development",
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "Next.js",
              "PHP",
              "laravel",
              "Frontend Development",
              "Fullstack Development"
            ],
            "audience":{
              "@type":"Audience",
              "audienceType":"Beginner web developers"
            }

          })
        }}/>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
