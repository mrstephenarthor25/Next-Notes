import { getContent } from "@/app/_hooks/getPage";
import { PageBuilder } from "@/app/components/pageBuilder";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

const lessons:any = {
    "things you need to know": ()=>import("@/mdx/page.mdx")
}

type prop = {
    params: {slug:string}
}


export default async function Note({params}:prop){
   
    let cleaned_slug = await params.slug.replaceAll("-"," ").replaceAll("%20"," ");


    const lesson = await prisma.notes.findUnique({
        where:{
            slug:cleaned_slug
        }
    });

    if(lesson == null){
        notFound();
    }

    let mod = await import(`@/mdx/${lesson.content}.mdx`);
    const LessonComponent = mod.default;

    return <LessonComponent/>
    
}