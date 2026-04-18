"use client";

import { Menu, SidebarClose} from "lucide-react"
import { HomeIcon, NotebookPen, NotebookTabs, Users} from "lucide-react"
import Link from "next/link"
import { useState } from "react";
import DropBtn from "./client/dropButton";
import { usePathname } from "next/navigation";

export default function Navigation(){

    const params = usePathname();

    const broken_params = params.split("/");
    const active = broken_params.length > 1? broken_params[1]:broken_params[0];
    const active_drop_menu = broken_params.length > 2? broken_params[2]:"";


     //state manager
     const [nav, setNav] = useState(false);
     const tutorialDropMenu = [
        {
            text:"Next.js 15",
            url:"/tutorials/next.js-15"
        },
      
     ]
  
    return <>
    <nav  className="hidden  border border-3 border-gray-500 rounded-full w-full md:flex md:items-center">
        <ul id="general_ui_nav" className="list-none flex justify-between  w-full m-0 px-3 py-2">
            <li className={`block border-b border-b-3 border-transparent border-solid ${active==""?"general_ui_active":'hover:border-purple-900 transition-all ease-in-out delay-200'}`}><Link href="/">Home</Link></li>
            <li className={`block border-b border-b-3 border-transparent border-solid  ${active=="tutorials"?"general_ui_active":'hover:border-purple-900 transition-all ease-in-out delay-200'}`}>
                <DropBtn buttonText="Tutorials" appendClass={"border-b border-b-3 border-transparent border-solid"}  items={tutorialDropMenu} active={active_drop_menu}/>    
            </li>
            <li className={`block border-b border-b-3 border-transparent border-solid  ${active=="blog"?"general_ui_active":'hover:border-purple-900 transition-all ease-in-out delay-200'}`}><Link href={"/blog"}>Blog</Link></li>
            <li className={`block border-b border-b-3 border-transparent border-solid  ${active=="mentorship"?"general_ui_active":'hover:border-purple-900 transition-all ease-in-out delay-200'}`}><Link href={"/mentorship"}>Mentorship</Link></li>
        </ul>
    </nav>

    <aside className="order-3 z-6 relative">
            <button onClick={()=>{
                setNav(nav==false?true:false)
            }} 
            id="mobile_nav_btn" 
            className="md:hidden order-3">
                {nav?<SidebarClose/>:<Menu/>}
            </button>
            <nav id="mobile_nav" className={`md:hidden transition-all delay-300 ease-in-out bg-white fixed min-h-screen min-w-[80vw] border border-solid z-6 ${nav?'translate-x-[-80%]':'translate-x-[80%]'} pointer-events-none`}>
                    <ul id="general_ui_nav" className="list-none w-full m-0 px-3 py-2 flex flex-col gap-9">
                        <li className={`flex gap-5 ${active==""?"general_ui_active":''}`}><HomeIcon className={`flex gap-3 ${active==""? "text-white":"text-indigo-900"}`} />Home</li>
                        <li className={`block flex gap-5 items-center ${active=="tutorials"?"general_ui_active":''}`}>
                            <NotebookPen className={`${active=="tutorials"? "text-white":"text-indigo-900"}`}/><DropBtn appendClass={"border-b border-b-3 border-transparent border-solid"} buttonText="Tutorials" items={tutorialDropMenu} active={active_drop_menu}/>    
                        </li>
                        <li className={`block ${active=="blog"?"general_ui_active":''}`}><Link className="flex gap-3" href={"#blogposts"}><NotebookTabs className={`${active=="blog"? "text-white":"text-indigo-900"}`} />Blog</Link></li>
                        <li className={`block ${active=="mentorship"?"general_ui_active":''}`}><Link className="flex gap-3" href={"/mentorship"}><Users className={`${active=="mentorship"? "text-white":"text-indigo-900"}`} /> mentorship</Link></li>
                        {/* <li className="block mt-[20%] flex justify-center"><ModeChange/></li>                        */}
                    </ul>
            </nav>

    </aside>
            
            

    
    
</> 
    
}