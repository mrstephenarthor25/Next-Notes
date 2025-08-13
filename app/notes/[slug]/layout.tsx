
import { NoteArea } from "@/app/components/note_small_box";
import Link from "next/link";
import { ReactNode} from "react" ;
import { getAllContents, getContent } from "@/app/_db/content";
import { MobileSideBar } from "@/app/components/mobile-bar";


type prop = {
    children: ReactNode,
    params:Promise<{slug:string}>
}

export default async function NotesLayout({children,params}:prop){

    //check if content as structured_data
    const setParam = await params; 
    const schema = await getContent( setParam.slug);
    let mainEntity,jsonLd;

    if(schema !== null && schema.faq !== undefined){
        
       mainEntity =  schema.faq.map(entry => {

            return {
                "@type":"Question",
                "name": entry.question,
                "acceptedAnswer": {
                    "@type":"Answer",
                    "text": entry.expectedAnswer
            }
        }
        });
    }
    
    jsonLd = {
        '@context': "https://schema.org",
        '@type':"FAQpage",
        "mainEntity":mainEntity
    }

    


    const active = "text-blue-900";

    //get all the notes
    const all_notes = await getAllContents();

    let next,prev;

    //get next and previous links
    const active_index = all_notes.findIndex((note_entry)=>{

        return note_entry.slug.toLocaleLowerCase() == setParam.slug.replaceAll("%20","-").toLocaleLowerCase();
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

    const aside_nodes = all_notes.map((entry,index)=>{
        return <li key={index} className={entry.slug == setParam.slug.replaceAll("%20"," ")? active:''}><Link href={"/notes/"+entry.slug.replaceAll(" ","-")}>{entry.title}</Link></li>
    });

    return <div className="h-full">

        <script 
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html:JSON.stringify(jsonLd).replace(/</g,'\\u003c')
            }}
            />
        <section className="h-full flex bg-white ">
            <aside className="flex flex-col justify-between -translate-x-full absolute top-0 bottom-0 px-3 py-4 bg-slate-50 basis-[10%] md:translate-none">
                <ul>
                    {aside_nodes}
                </ul>

                <div className="shadow-sm px-3 py-2 rounded-md text-center">
                    <Link href="/">Home</Link>
                </div>
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

                        <MobileSideBar aside_nodes={aside_nodes}/>
                    </div>
                </div>
                
            </div>
        </section>
      
    </div>
}