
import { NoteArea } from "@/app/components/note_small_box";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ReactNode } from "react" ;
import { CiMenuBurger } from "react-icons/ci";
import prisma from "@/lib/prisma";
//sidebar

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/app/components/app-sidebar";
import { count } from "console";


type prop = {
    children: ReactNode,
    params:{slug:string}
}

export default async function NotesLayout({children,params}:prop){

    let active = "text-blue-900";

    //get all the notes
    let all_notes = await prisma.notes.findMany({
        select:{
            title:true,
            slug:true,
        }
    });

    let next,prev;

    //get next and previous links
    let active_index = all_notes.findIndex((note_entry)=>{

        return note_entry.slug == params.slug.replaceAll("%20","-");
    });

    //set prev
    if((active_index - 1) >= 0){ 
        prev = `/notes/${all_notes[active_index - 1].slug}`;
    }

    //set next
    if((active_index + 1) <= all_notes.length-1 ){
       // console.log(all_notes[active_index + 1].slug);
        next = `/notes/${all_notes[active_index + 1].slug}`
    }

    let aside_nodes = all_notes.map((entry,index)=>{
        return <li key={index} className={entry.slug == params.slug.replaceAll("%20"," ")? active:''}><Link href={"/notes/"+entry.slug.replaceAll(" ","-")}>{entry.title}</Link></li>
    })
    return <div className="h-full">

        <section className="h-full flex bg-white ">
            <aside className="hidden px-3 py-4 bg-slate-50 basis-[10%] md:block">
                <ul>
                    {aside_nodes}
                </ul>
            </aside>

            <div className="flex-1 flex justify-center md:px-3">
                <div className="w-full  relative  px-3 py-2 bg-slate-100 flex justify-center md:w-[45%] md:rounded-t-[30px]">
                   <NoteArea/>

                   <div className="bg-white rounded-lg w-[90%] overflow-auto absolute bottom-5 h-[80vh] max-h-[80vh]">
                        <main className="px-2 py-5 md:px-5">
                            {children}
                        </main>

                        <div className="flex justify-between px-5 py-3">
                            {prev? <button className="border border-solid rounded-md px-3 py-2 text-blue-700 hover:bg-blue-700 hover:text-white transition-all"><Link href={prev}>Previous</Link></button>: ""}
                            {next? <button className="border border-solid rounded-md px-3 py-2 text-blue-700 hover:bg-blue-700 hover:text-white transition-all"><Link href={next}>Next</Link></button>:""}
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
      
    </div>
}