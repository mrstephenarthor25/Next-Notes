import { notFound } from "next/navigation";
import { getBlogPost } from "@/app/_db/content";

type prop = {
    params: Promise<{slug:string}>
}


export default async function Note({params}:prop){
   
    const setParams = await params;
    const slug = setParams.slug.replaceAll("%20","-");

    const lesson = await getBlogPost(slug);

    if(lesson == null){
        notFound();
    }


   
    const mod = await lesson.reslove();
    const LessonComponent = mod.default;

    return <LessonComponent/>
    
}