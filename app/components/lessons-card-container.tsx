import { lessons } from "../_db/lessons";
import LessonCard from "./lesson-card";

export default function LessonCardContainer(){

    const lessons_card_collection = lessons.map((lesson,index)=>{

        return <LessonCard title={lesson.name} desc={lesson.desc} url={lesson.url} illustration={lesson.illustration} active={lesson.active} key={index}/>
    })
    
    return <div className="w-full h-full flex flex-col items-center">
        <div className="flex justify-between items-center w-full my-5 md:w-[80%] px-5">
            <h2 className="my-0 font-bold text-[20px]">Lesson Categories</h2>
            {/* <button className="text-sm px-2 py-2 border border-solid rounded-full">Browse all articles</button> */}
        </div>
        <div className="w-[90vw] h-full min-h-[50vh] gap-4 flex flex-col md:flex-row md:w-[70%]">
            {lessons_card_collection}
        </div>
    </div>
}