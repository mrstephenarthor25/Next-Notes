
import { NoteArea } from "@/app/components/note_small_box_blog";
import Link from "next/link";
import { ReactNode} from "react" ;
import { getAllBlogPosts, getBlogPost } from "@/app/_db/content";
import Pagination from "@/app/components/pagination";
import { Metadata } from "next";
import Footer from "@/app/components/footer";
import { MobileBlogSideBar } from "@/app/components/mobile-nav-blog";


type urlProp = {
    params: Promise<{slug:string}>
}
export async function generateMetadata({params}:urlProp): Promise<Metadata | undefined>{

    const slug = (await params).slug;

    const content = await getBlogPost(slug);

    if(content !== null){

        return {
            title: content.title,
            description:content.desc
        }
    }
    
}
type prop = {
    children: ReactNode,
    params:Promise<{slug:string}>
}

export default async function BlogLayout({children,params}:prop){

    //check if content as structured_data
    const setParam = await params; 
    const schema = await getBlogPost( setParam.slug);
    let mainEntity,jsonLd;
    mainEntity = null;

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
    const all_blogs = await getAllBlogPosts();

    let next,prev;

    //get next and previous links
    const active_index = all_blogs.findIndex((note_entry)=>{

        return note_entry.slug.toLocaleLowerCase() == setParam.slug.replaceAll("%20","-").toLocaleLowerCase();
    });

    //set prev
    if((active_index - 1) >= 0){ 
        prev = `/notes/${all_blogs[active_index - 1].slug}`;
    }

    //set next
    if((active_index + 1) <= all_blogs.length-1 ){
       // console.log(all_blogs[active_index + 1].slug);
        next = `/notes/${all_blogs[active_index + 1].slug}`
    }

    const aside_nodes = all_blogs.map((entry,index)=>{
        return <li key={index} className={entry.slug == setParam.slug.replaceAll("%20"," ")? active:''}><Link href={"/notes/"+entry.slug.replaceAll(" ","-")}>{entry.title}</Link></li>
    });

    return <div className="h-full">

       { mainEntity && <script 
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html:JSON.stringify(jsonLd).replace(/</g,'\\u003c')
            }}
            />}
            
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
                        <h1 className="text-3xl mt-2 mb-0 py-4 ">{all_blogs[active_index].title}</h1>
                    

                        <main className="px-2 py-5 md:px-5">
                            {children}
                        </main>

                       
                       <Pagination next={next} prev={prev} prevTitle={all_blogs[active_index - 1]?.title} nextTitle={all_blogs[active_index + 1]?.title}/>

                       <Footer placeholder={all_blogs[active_index].title}/>
                        <MobileBlogSideBar aside_nodes={aside_nodes} title={all_blogs[active_index].title} chapter={active_index + 1}/>
                    </div>
                </div>
                
            </div>
        </section>
      
    </div>
}