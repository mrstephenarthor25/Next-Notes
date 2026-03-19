import RecentCard from "./recent-card"
import { recent } from "../_db/lessons"

export default function RecentCardContainer(){

    const lessons_card_collection = recent.map((lesson,index)=>{
        return <RecentCard title={lesson.title} desc={lesson.desc} url={lesson.url} date={lesson.date}key={index}/>
    })
    
    return<>
    <div className="w-[80vw] mx-[10vw] mt-9"><strong>Recent Posts</strong></div> 
    <div className="flex flex-col items-center mt-8 w-full ">
        <div className="h-full  justify-between w-full overflow-x-scroll md:flex md:w-[80%]">
                {lessons_card_collection}
        </div>
    </div>
</>
}