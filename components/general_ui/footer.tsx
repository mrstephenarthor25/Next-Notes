import Link from "next/link";
import { ImFacebook } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { ListCheck } from "lucide-react";
import Schedule from "../schedule";

export default function Footer(){

    return <footer className="min-h-0 flex justify-center w-[100vw]  m-0">

        <div className=" px-3 py-9 gap-9 h-full bg-blue-950 flex flex-col justify-around m-0 md:w-[80%] md:px-[5rem]">

            {/* main area */}
            <div className="h-[70%] text-white flex flex-col md:flex-row">
                <div className="flex-2">
                    <h2 className="text-[30px] text-bold-200 m-0">Learn Website <br className="inline md:hidden"/>Development <br/>Online</h2>
                    <p className="text-white text-sm max-w-[60%] md:max-w-full">Are you confused about how to get started learning <br/>
                    web development online?<br/>Book a free 30mins call so i&apos;ll help you know exactly how you can get started.
                    </p>
                {/* booking comoponent */}
                <Schedule/>
                    {/* <button className="text-black bg-white px-5 py-3 rounded-full flex gap-5 justify-around">Book a Call  <ListCheck/> </button> */}
                </div>

                <div className="flex-1 gap-3 mt-8 md:mt-0 md:flex">

                    <div className="flex-1">
                        <strong>Free resources</strong>
                        <ul className="list-none text-white m-0 p-0 text-sm" >
                            <li><Link href="/notes/What-is-Nextjs">Next.js 15</Link></li>
                            <li>HTML (coming shorlty)</li>
                            <li>Next.js 16 (coming shorlty)</li>
                        </ul>
                    </div>

                    
                    <div className="flex-1">
                        <strong>Live Sessions</strong>
                        <ul className="list-none text-white m-0 p-0 text-sm">
                            <li><Link href="/mentorship">Learn HTML & CSS</Link></li>
                            <li><Link href="/mentorship">Learn FullStack web development(foundations)</Link></li>
                        </ul>
                        
                    </div>
                </div>
            </div>

            {/* last part */}
            <div className="px-3 py-3 h-[10%] text-white text-sm flex flex-col gap-3 justify-between md:flex-row">
                <span> &copy; Copyright of WebDevBySteve 2026</span>
                <span className="flex gap-5"><ImFacebook/><ImInstagram/></span>
            </div>
        </div>

    </footer> 
}