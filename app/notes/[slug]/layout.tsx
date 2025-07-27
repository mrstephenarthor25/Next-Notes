"use client";

import { Nav } from "@/app/components/nav";
import { NoteArea } from "@/app/components/note_small_box";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ReactNode } from "react" ;
import { CiMenuBurger } from "react-icons/ci";



type prop = {
    children: ReactNode
}

export default function NotesLayout({children}:prop){

    let {slug} = useParams();
    let active = "text-blue-900";


    let sample_aside_content = [
        {
            title:"Perequesites",
            slug: "things-you-need-to-learn-nextjs",
            content:"This is the sample content for this page. #[image:next.svg]# tihs is the content after the image"
        }
    ];

    let aside_nodes = sample_aside_content.map((entry,index)=>{
        return <li key={index} className={entry.slug == slug? active:''}>{entry.title}</li>
    })
    return <div className="h-full">
        {/* <Nav/> */}
        <div className="h-9 text-right p-3 flex justify-between p-3 mb-3 items-center">

            <span className="block md:hidden"><CiMenuBurger/></span>
            <div className="flex-1 flex justify-end gap-3">
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>next</Link> 
                <Link href={"/"}>previous</Link>
            </div>
            
        </div>

        <section className="h-full flex bg-white ">
            <aside className="hidden px-3 py-4 bg-slate-50 basis-[10%] md:block">
                <ul>
                    {aside_nodes}
                </ul>
            </aside>

            <div className="flex-1  flex justify-center md:px-3">
                <div className="w-full  relative  px-3 py-2 bg-slate-100 flex justify-center md:w-[50%] md:rounded-t-[30px]">
                   <NoteArea/>

                   <div className="bg-white rounded-lg w-[90%] overflow-auto absolute bottom-2 h-[80vh] max-h-[80vh]">
                        <main>
                            {children}
                        </main>
                    </div>
                </div>
                
            </div>
        </section>
      
    </div>
}