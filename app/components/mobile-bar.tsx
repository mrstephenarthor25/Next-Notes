"use client";

import { SidebarClose } from "lucide-react";
import { ReactNode, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";


export function MobileSideBar({aside_nodes}:{aside_nodes:ReactNode}){

    useEffect(()=>{

        let button = document.querySelector("#sidebarButton");

        let closeBtn = document.querySelector("#closeBar");
        let sideBar = document.querySelector("#sidebar");

        button?.addEventListener("click",(_)=>{
            // console.log("side bar clicked")
            sideBar?.classList.replace("bottom-[-20]","bottom-0");
        });


        closeBtn?.addEventListener("click",_=>{
            sideBar?.classList.replace("bottom-0","bottom-[-20]")
        })

    })
    return <div>
        <div className="px-3 py-2">
            <button id="sidebarButton" className="absolute top-4 right-4 md:hidden"><CiMenuBurger/></button>
        
        
            <div id="sidebar" className="bg-gray-500/50 h-full fixed bottom-[-20] flex flex-col justify-between left-0 right-0 transition-all transition-delay-500 rounded-md">
                <div className="px-3 py-4 text-right">
                    <button id="closeBar"><SidebarClose className="text-white"/></button>
                </div>
                <div className="bg-white px-3 py-2 shadow-md shadow-gray-200 h-[40vh] w-full rounded-md overflow-x-auto">
                    <ul className="list-none">

                        {aside_nodes}
                        
                        
                    </ul>
                </div>
            </div>
        </div>

    </div>
}