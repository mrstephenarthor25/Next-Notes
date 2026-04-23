
import PictureCard from "../general_ui/picture_info_card";
import { blogPosts } from "@/app/_db/blogPosts";
import Slider from "../general_ui/client/slider";

export default function BlogSection(){

    const blogPost_card = blogPosts.map((blogPost,id)=>{
        return <PictureCard key={id}
                    title={blogPost.title} 
                    url={blogPost.url} 
                    imageUrl={blogPost.imageUrl} 
                    description={blogPost.description} 
                    mustHave = {[]}
                    alt={blogPost.alt}
                    ready={blogPost.ready}/>
    })

    return <div id="blogposts" className="flex flex-col  md:flex-row">

       
        <div className="flex-2 flex items-center order-1">
            <div className="px-9">
                <h2 className="text-[30px]">Go beyond tutorials - learn the why behind the code</h2>
                <p>Detailed articles that go beyond brief tutorials to explain how web development really works. These blogs explore concepts, best practices, real-world development ideas, and answers more questions to help you build deeper understanding of web development concepts, </p>
            </div>
        </div>


     {/* slider container */}
        <div className="flex-2 flex  items-center justify-center py-5 order-2">
            <Slider cards={blogPost_card}/> 
        </div>

    
    </div>

}