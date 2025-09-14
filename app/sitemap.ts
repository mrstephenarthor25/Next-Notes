import { MetadataRoute } from "next";
import { getAllContents } from "./_db/content";

export default async function sitemap():Promise<MetadataRoute.Sitemap>{

    const domain = "https://next-notes-eta.vercel.app/";

    //get all the pages 
    let contents = await getAllContents();
    let url =  contents.map( (content)=>{
        return {
            url:`domain${content.slug}`,
            lastModified:new Date(),
            priority:1
        }
    });

   //add home page at the begining
    [{
        url:domain,
        lastModified:new Date(),
        priority:1
    }].push(...url)

    return url;

}