import Header from "@/components/general_ui/header"
import Image from "next/image"
import Footer from "@/components/general_ui/footer"
import { liveSessions as contents } from "../_db/live_sessions"
import ContentCard from "@/components/general_ui/notes_card"
import { Metadata } from "next"

export const metadata:Metadata = {
  title:"Web development mentorship",
  description:"Join live web development mentorship for beginners. Learn frontend and fullstack skills with practical and guided sessions, practical prjects and real-time support"
}
export default function Page(){

     const content_list_card = contents?.map((content,id)=>{
            
            return <ContentCard key={id} alt={content.alt} title={content.title} description={content.description?content.description:""} imageUrl={content.imageUrl? content.imageUrl:""}  url={"blog/"+content.slug}/>
            
        })
        
    return <>
        <Header/>
    
    
        <main className="h-fit">
    
           {/* hero */}
                   <div className="flex flex-col h-[90vh] md:px-[9%] md:pr-[2%] md:flex-row md:h-[70vh]">
                     {/* text */}
                     <div className="order-2 px-9 flex-1 flex items-center md:order-1 md:px-0">
                         <div>
                           <h1 className=" text-[30px] mb-3 md:text-[40px]">Learn web development online with live mentorship and guided support</h1>
                           <p>Learn web development through structured live mentorship designed for begginers. learn step by step with practical excercises, and real-time support to help you build string frontend and fullstack skills with confidence &#128522;.</p>
                         </div>
                     </div>
           
                     {/* image */}
                     <div className="order-1 relative flex-1 md:order-2">
                       <Image src={"/images/general_ui/ui-ux-designers-isometric-composition-with-small-people-creating-custom-design-web-site-3d-vector-illustration.png"} alt="learn how to create websites online" fill={true}/>
                     </div>
                   </div>
    
            <hr className="my-3"/>
            
            {content_list_card}
    
           <hr className="my-3"/>
        </main>
        <Footer/>
        </>
    
}