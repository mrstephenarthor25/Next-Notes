import { getContent } from "@/app/_hooks/getPage";
import { PageBuilder } from "@/app/components/pageBuilder";
import prisma from "@/lib/prisma";

type prop = {
    params: {slug:string}
}

export default async function Note({params}:prop){
   
    const allNotes = await prisma.notes.findMany()
    console.log(allNotes);
    
    let param = await params;
    let slug =  await param.slug
    let content = getContent({slug});

    //get page build


    if(content == undefined || content == null){

        return <p>No content for this topic</p>
    }

    return <>
           
            {<PageBuilder content={content}/>}
    </>
}