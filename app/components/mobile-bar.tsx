"use client";


import { ReactNode, useState } from "react"
import Link from "next/link";
import { HomeIcon } from "lucide-react";
import { PanelBottomCloseIcon } from "lucide-react";
import { PanelBottomOpen } from "lucide-react";

export function MobileSideBar({aside_nodes}:{aside_nodes:ReactNode}){

    let [open, setOpen] = useState(false);


    return <div>
        <div className="px-3 py-2">
            
            {open == false && <button onClick={_=>setOpen(true)} className="absolute top-4 right-4 md:hidden"><PanelBottomOpen/></button>}
        
        
            {open == true && <div id="sidebar" className="bg-gray-500/50 h-full fixed bottom-0 flex flex-col justify-between left-0 right-0 transition-all transition-delay-500 rounded-md">
                <div className="px-3 py-4 text-right">
                    <button id="closeBar"
                        onClick={_=>setOpen(false)}
                    ><PanelBottomCloseIcon className="text-white"/></button>
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