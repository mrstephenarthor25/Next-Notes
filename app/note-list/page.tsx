import { contents } from "../_db/content";

import ListCard from "../components/blog-card";

export default function NoteList(){
//get all the notes

let all_cards = contents.map((content,index)=>{

    if(index == contents.length - 1){
        return
    }
    return <ListCard key={index} title={content.title} descr={content.desc} url={"/notes/"+content.slug}/>
});

return <section>

    <h2 className="text-[20px] text-center md:text-[32px]">All Notes</h2>

    <div className="py-2" >

        <div className="max-h-[50vh] overflow-y-scroll md:w-[90%] ">
            {all_cards}
        </div>

    </div>
</section>

}