import Header from "@/components/general_ui/header";
import BlogSection from "@/components/section/blog";
import LiveSection from "@/components/section/live_session";
import NoteSection from "@/components/section/notes";
import { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/general_ui/footer";
import MobileNav from "@/components/general_ui/client/mobile_nav";


export const metadata :Metadata ={
  title: "Next.js Tutorial for beginners",
  description:"Learn Next.js using a step by step tutorial that would guide you as a beginner from the basics up to the advanced parts of Next.js. Helping you grow from a beginner to a Next.js Pro"
  
}

export default function Home() {

  return <>
    {/*mobile menu  */}
    {/* <MobileNav/> */}
    <section className="h-[100vh] max-w-[100%]">

<<<<<<< HEAD
          <div className="z-5 text-white w-full  py-3 px-9 bg-gray-900/50 min-h-[50vh] md:w-[60%] md:h-max ">
              <span>My <strong>Next.js tutorial</strong> Notes </span>
              <h1 className="text-lg text-[40px] my-2">A step by step Next.Js tutorial made for beginners</h1>
               <p className="hidden w-full text-[20px] text-white lg:w-[60%] md:block">Hello, i&apos;m Stephen. I chose to create this beginner-friendly tutorial as a step by step process to learn Next.js 
                and other technologies that are commonly used within the Next.js ecosystem.
                I really hope this helps in taking you to the next level as a Next.js developer!.
                </p>
                 <Link className="border border-solid px-3 py-3 w-max rounded-full transition-colors flex items-center text-background " href="/notes/What-is-Nextjs">
                    Start learning
                 </Link>
=======
        <Header/>

        {/* hero */}
        <div className="flex flex-col h-[90vh] md:px-[9%] md:pr-[2%] md:flex-row md:h-[70vh]">
          {/* text */}
          <div className="order-2 px-9 flex-1 flex items-center md:order-1 md:px-0">
              <div>
                <h1 className=" text-[30px] mb-3 md::text-[40px]">Start Learning Web Development Online</h1>
                <p>Beginner-friendly tutorials, detailed guides, and live mentorship designed to help you build web development skills with clarity, structure, and support &#128522;</p>
              </div>
>>>>>>> home-page-update
          </div>

          {/* image */}
          <div className="order-1 relative flex-2 md:order-2">
            <Image src={"/images/general_ui/learn_web_development.jpg"} alt="learn how to create websites online" fill={true}/>
          </div>
        </div>
    </section>

<<<<<<< HEAD
    <main className=" w-full">
      <section className="min-h-[60vh]">
         <p className="text-[20px] text-gray-500 text-justify px-5 py-3 md:hidden">
          Hello, i&apos;m Stephen. I chose to create this beginner-friendly tutorial as a step by step process to learn Next.js 
          and other technologies that are commonly used within the Next.js ecosystem.
          I really hope this helps in taking you to the next level as a Next.js developer!.
            </p>
        <LessonCardContainer/>
        <RecentCardContainer/>
      </section>
    </main>
=======
    <section className="md:px-[9%]">

    {/* Notes area */}
      <NoteSection/>

    {/* Blogposts area */}
    <BlogSection/>

    {/* Live courses */}
    <LiveSection/>

    </section>

    {/* footer of the page */}
    <Footer/>
        
  </>

  

  // return ( <>

  //   <header className="min-h-[70vh] rounded-lg relative  items-end flex items-center w-full md:w-[80%] md:items-center md:mx-[10%] md:px-9">
  //         <Image src={boy_in_park} fill={true} alt="" className="rounded-lg -z-50"/>

  //         <div className="z-5 text-white w-full  py-3 px-9 bg-gray-900/50 min-h-[50vh] md:w-[60%] md:h-max ">
  //             <span>My <strong>Next.js tutorial</strong> Notes </span>
  //             <h1 className="text-lg text-[40px] my-2">A step by step Next.Js tutorial made for beginners</h1>
  //              <p className="hidden w-full text-[20px] text-white lg:w-[60%] md:block">Hello, i'm Stephen. I chose to create this beginner-friendly tutorial as a step by step process to learn Next.js 
  //               and other technologies that are commonly used within the Next.js ecosystem.
  //               I really hope this helps in taking you to the next level as a Next.js developer!.
  //               </p>
  //                <Link className="border border-solid px-3 py-3 w-max rounded-full transition-colors flex items-center text-background " href="/notes/What-is-Nextjs">
  //                   Start learning
  //                </Link>
  //         </div>

  //   </header>

  //   <main className=" w-full">
  //     <section className="min-h-[60vh]">
  //        <p className="text-[20px] text-gray-500 text-justify px-5 py-3 md:hidden">
  //         Hello, i'm Stephen. I chose to create this beginner-friendly tutorial as a step by step process to learn Next.js 
  //         and other technologies that are commonly used within the Next.js ecosystem.
  //         I really hope this helps in taking you to the next level as a Next.js developer!.
  //           </p>
  //       <LessonCardContainer/>
  //       <RecentCardContainer/>
  //     </section>
  //   </main>
>>>>>>> home-page-update
      
      
  //     <footer className="items-center justify-between bg-black rounded-lg w-full  mt-5 md:flex md:mx-[10%] md:w-[80%]">

<<<<<<< HEAD
        <div className="flex-1 pl-3 text-white">
            <h2 className="text-[30px] mb-3">Learn Next.js step by step</h2>
            <p className="text-sm text-white">learn, practice and grow!</p>
            <ImTwitter className="inline-block mr-5"/>
            <ImLinkedin className="inline-block"/>
        </div>
        <div className="flex-1 px-3 mt-3 items-center justify-between text-white md:mt-0 md:px-9 md:flex">
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
        </div>
      </footer>
  </>);
=======
  //       <div className="flex-1 pl-3 text-white">
  //           <h2 className="text-[30px] mb-3">Learn Next.js step by step</h2>
  //           <p className="text-sm text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
  //           <ImTwitter className="inline-block mr-5"/>
  //           <ImLinkedin className="inline-block"/>
  //       </div>
  //       <div className="flex-1 px-3 mt-3 items-center justify-between text-white md:mt-0 md:px-9 md:flex">
  //           <a
  //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/file.svg"
  //           alt="File icon"
  //           width={16}
  //           height={16}
  //         />
  //         Learn
  //       </a>
  //       <a
  //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/window.svg"
  //           alt="Window icon"
  //           width={16}
  //           height={16}
  //         />
  //         Examples
  //       </a>
  //       <a
  //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //         href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <Image
  //           aria-hidden
  //           src="/globe.svg"
  //           alt="Globe icon"
  //           width={16}
  //           height={16}
  //         />
  //         Go to nextjs.org →
  //       </a>
  //       </div>
  //     </footer>
  // </>);
>>>>>>> home-page-update
}
