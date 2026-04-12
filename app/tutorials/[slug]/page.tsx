import { getAllNextContent } from "@/app/_db/content";
import Footer from "@/components/general_ui/footer"
import Header from "@/components/general_ui/header"
import ContentCard from "@/components/general_ui/notes_card";
import { notFound } from "next/navigation";
import Image from "next/image";


type prop = {
    params: Promise<{slug:string}>
}

export default async function AllNotes({params}:prop){

    let contents = null;
    let imageUrl = null;
    let slugToTitle = null

    const slug = (await params).slug;

    if(slug == null){
        notFound()
    }else{
        switch(slug.toLowerCase()){
        case "next.js-15":
            slugToTitle = "Next.js 15"
            contents = await getAllNextContent({start:0});
            imageUrl = "/images/lessons_card/next.js_15.jpg"
            break;
        default: notFound()
       }
    }
    //make content list card
    const content_list_card = contents?.map((content,id)=>{
        if(id < contents.length - 1){
            return <ContentCard key={id} title={content.title} description={content.desc?content.desc:""} imageUrl={imageUrl? imageUrl:""}  url={""} ready={true}/>
        }
    })
    //get content;
    return <>
    <Header/>


    <main className="h-fit">

       {/* hero */}
               <div className="flex flex-col h-[90vh] md:px-[9%] md:pr-[2%] md:flex-row md:h-[70vh]">
                 {/* text */}
                 <div className="order-2 px-9 flex-1 flex items-center md:order-1 md:px-0">
                     <div>
                       <h1 className=" text-[30px] mb-3 md:text-[40px]">Simple {slugToTitle} Tutorials for beginners</h1>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga cum pariatur perspiciatis facilis reprehenderit? Qui culpa magni quia assumenda voluptatum.&#128522;</p>
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