import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { faq } from "./_FAQ/faq";
import prisma from "@/lib/prisma";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

type props = {
  params: Promise<{slug:string}>
}
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {

  

  // let schema = faq.find(()=>{
  
  // });
  
  return (
    <html lang="en">
      

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-[100vh] p-0 m-0`}
      >
        {children}
      </body>
    </html>
  );
}
