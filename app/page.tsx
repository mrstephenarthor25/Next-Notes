
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata :Metadata ={
  title: "Next.js Tutorial for beginners",
  description:"Learn Next.js using a step by step tutorial that would guide you as a beginner from the basics up to the advanced parts of Next.js. Helping you grow from a beginner to a Next.js Pro"
}

export default function Home() {
  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  
      <main id="start"className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <span className="">My <strong>Next.js tutorial</strong> Notes </span>
      <div>
        
        <h1 className="text-lg text-[40px]">A step by step Next.Js tutorial made for beginners</h1>

        <em className="block font-italic mb-5 text-gray-700">From a learner...</em>

        <p className="w-full lg:w-[60%]">Hello, i'm Stephen. I chose to create this beginner-friendly tutorial as a step by step process to learn Next.js 
        and other technologies that are commonly used within the Next.js ecosystem.
        Using this Next.js tutorial, I aim to document my learing process while also helping beginners like myself learn Next.js step by step, using words that
        are easy to understand, beginner-friendly illustrations that teach technical concepts clearly, and lessons that are easy to follow along with.
        <br/>
        Basically, the lessons are designed in a way that I would have loved to learn Next.js if I had to start over again.
        </p>

        <p>I really hope this helps in taking you to the next level as a Next.js developer!.</p>

      </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/notes/What-is-Nextjs"
          >
            Start learning
          </Link>
          </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
