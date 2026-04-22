import Header from "@/components/general_ui/header"
import Image from "next/image"
import Footer from "@/components/general_ui/footer"
import { blogposts as contents } from "../_db/blog"
import ContentCard from "@/components/general_ui/notes_card"
import { Metadata } from "next"

export const metadata:Metadata = {
    title:"Web Developmenet Blog for Beginners",
    description:"Read beginner-friendly web development articles and guides. Learn HTML, JavaScript, Next.js, and core concepts with clear explanations and real examples"
}


export default function Page(){

     const content_list_card = contents?.map((content,id)=>{
            
            return <ContentCard key={id} title={content.title} description={content.desc?content.desc:""} imageUrl={content.imageUrl? content.imageUrl:""} url={"blog/"+content.slug}/>
            
        })
        
    return <>
        <Header/>
    
    
        <main className="h-fit">
    
           {/* hero */}
                   <div className="flex flex-col h-[90vh] md:px-[9%] md:pr-[2%] md:flex-row md:h-[70vh]">
                     {/* text */}
                     <div className="order-2 px-9 flex-1 flex items-center md:order-1 md:px-0">
                         <div>
                           <h1 className=" text-[30px] mb-3 md:text-[40px]">Web Developmenet Blog for Beginners - Learn Concepts, Guides, and Best practices</h1>
                           <p>Explore detailed articles that explain web development concepts in a clear and practical way. From HTML fundamentals to modern frameworks, these guides help you understand how things work beyond just writing code&#128522;</p>
                         </div>
                     </div>
           
                     {/* image */}
                     <div className="order-1 relative flex-1 md:order-2">
                       <Image src={"/images/general_ui/blogpost.jpg"} alt="learn how to create websites online" fill={true}/>
                     </div>
                   </div>
    
            <hr className="my-3"/>
            
            {content_list_card}
    
           <hr className="my-3"/>
        </main>
        <Footer/>
        </>
    
}