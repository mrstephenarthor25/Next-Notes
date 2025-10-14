import { blogposts } from "../_db/blog";

import ListCard from "../components/blog-card";

export default function BlogList(){
//get all the notes

let all_cards = blogposts.map((blogpost,index)=>{

   
    if(index == blogposts.length - 1 && index > 0){
        return
    }
    return <ListCard key={index} title={blogpost.title} descr={blogpost.desc} url={"/blog/"+blogpost.slug}/>
});

console.log(all_cards);

return <section>

    <h2 className="text-[20px] text-center md:text-[32px]">Featured Blog posts</h2>

    <div className="py-2" >

        <div className="max-h-[50vh] overflow-y-scroll md:w-[90%] ">
            {all_cards}
        </div>

    </div>
</section>

}