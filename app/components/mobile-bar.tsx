import { ReactNode, useState } from "react"
import Link from "next/link";
import { HomeIcon } from "lucide-react";
import { LucideMenu } from "lucide-react";


export function MobileSideBar({aside_nodes,title,chapter}:{aside_nodes:ReactNode, title:string, chapter:number}){

    let [open, setOpen] = useState(false);


    return <div>
        <div className="px-3 py-2 md:hidden">
            
            {open == false && <div className="flex gap-3 items-center px-3 py-3 rounded-md bg-white shadow-md  shadow-gray-50 fixed top-[15%] right-[8%] w-[85vw] md:hidden">
                    <button onClick={_=>setOpen(true)}><LucideMenu className="text-gray-500"/></button>

                    <div className="text-sm">
                        <span className="font-bold">Chapter {chapter}</span>
                        <strong className="block mt-0 p-0 font-normal text-gray-500">{title}</strong>
                    </div>
                </div>}
        
        
            {open == true && <div id="sidebar" className="bg-gray-500/50 h-full fixed bottom-0 flex flex-col justify-between left-0 right-0 transition-all transition-delay-500 rounded-md">
                <div className="px-3 py-4 text-right">
                    <button id="closeBar"
                        onClick={_=>setOpen(false)}
                    ><LucideMenu className="text-white"/></button>
                </div>
                <div className="relative bg-white shadow-md shadow-gray-200 h-[40vh] w-full rounded-md overflow-x-auto">
                    <ul className="list-none pb-[10vh] px-3 pt-3">
                        {aside_nodes}
                    </ul>

                    <div className="px-3 py-2 w-full bg-white sticky bottom-0 rounded-md text-center">
                        <Link href="/" className="flex items-center gap-3 justify-center text-black"><HomeIcon/>Home</Link>
                    </div>
                </div>
            </div>}
        </div>

    </div>
}