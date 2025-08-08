import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

type prop = {
    params: {slug:string}
}


export default async function Note({params}:prop){
   
    let slug = params.slug.replaceAll("%20","-");

    const lesson = await prisma.notes.findUnique({
        where:{
            slug
        }
    });

    if(lesson == null){
        notFound();
    }

    console.log(`@/mdx/${lesson.content}.mdx`);
    let mod = await import(`@/mdx/${lesson.content}.mdx`);
    const LessonComponent = mod.default;

    return <LessonComponent/>
    
}