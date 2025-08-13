"use client";

import { SidebarClose } from "lucide-react";
import { ReactNode, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
import { HomeIcon } from "lucide-react";
import { PanelBottomCloseIcon } from "lucide-react";
import { PanelBottomOpen } from "lucide-react";

export function MobileSideBar({aside_nodes}:{aside_nodes:ReactNode}){

    useEffect(()=>{

        let button = document.querySelector("#sidebarButton");

        let closeBtn = document.querySelector("#closeBar");
        let sideBar = document.querySelector("#sidebar");

        button?.addEventListener("click",(_)=>{
            // console.log("side bar clicked")
            sideBar?.classList.replace("bottom-[-20]","bottom-0");
            button.classList.add("hidden");
        });


        closeBtn?.addEventListener("click",_=>{
            sideBar?.classList.replace("bottom-0","bottom-[-20]")
            button?.classList.remove("hidden");
        })

    })
    return <div>
        <div className="px-3 py-2">
            <button id="sidebarButton" className="absolute top-4 right-4 md:hidden"><PanelBottomOpen/></button>
        
        
            <div id="sidebar" className="bg-gray-500/50 h-full fixed bottom-[-20] flex flex-col justify-between left-0 right-0 transition-all transition-delay-500 rounded-md">
                <div className="px-3 py-4 text-right">
                    <button id="closeBar"><PanelBottomCloseIcon className="text-white"/></button>
                </div>
                <div className=" relative bg-white shadow-md shadow-gray-200 h-[40vh] w-full rounded-md overflow-x-auto">
                    <ul className="list-none pb-[10vh] px-3 pt-3">
                        {aside_nodes}
                    </ul>

                    <div className="px-3 py-2 w-full bg-white sticky bottom-0 rounded-md text-center">
                        <Link href="/" className="flex items-center gap-3 justify-center"><HomeIcon/>Home</Link>
                    </div>
                </div>
            </div>
        </div>

    </div>
}