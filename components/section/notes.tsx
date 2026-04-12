import { notes } from "@/app/_db/notes";
import PictureCard from "../general_ui/picture_info_card";
import Slider from "../general_ui/client/slider";

export default function NoteSection(){

    const notes_card = notes.map((note,id)=>{
        return <PictureCard key={id}
                    title={note.title} 
                    url={note.url} 
                    imageUrl={note.imageUrl} 
                    description={note.description} 
                    mustHave = {[]}
                    ready={note.ready}/>
    })

    return <div id="notes" className="flex flex-col bg-blue-50  md:flex-row">

        {/* slider container */}
        <div className="flex-2 flex  items-center justify-center py-5  order-2 md:order-1">
            <Slider cards={notes_card}/> 
        </div>

        <div className="flex-2 flex items-center order-1 md:order-2">
            <div className="px-9">
                <h2 className="text-[30px]">Step by Step learning Notes</h2>
                <p>Beginner friendly tutorials designed to be brief while helping you learn Web development step by step. Each note breaks complex concepts into simple explanations and practical examples so you can follow along, practice, and gain confidence as you learn</p>
            </div>
        </div>

    
    </div>

}