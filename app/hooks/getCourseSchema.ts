export default function getCourseSchema({urlDir,slugToTitle,contents}:{urlDir:string,slugToTitle:string,contents:{title:string,slug:string}[]}){

    const schema = {
            "@content":"https://schema.org",
            "@type":"Course",
            "name":`${slugToTitle} for beginners`,
            "description":`Follow step-by-step tutorial designed to help you learn ${slugToTitle} from the ground up. Each note breaks down concepts into simple explanations and practical examples so you can learn, practice, and improve consitently`,
            "provider":{
                "@type":"EducationalOrganization",
                "name":"WebDevBySteve",
                "url":"https://webdevbysteve.online"
            },
            "educationalLevel":"Beginner",
            "inLanguage":"en",
            "isAccessibleForFree":true,
            "hasPart":contents.map((lesson,id)=>{
                return {
                    "@type":"CreativeWork",
                    "position":id+1,
                    "name":lesson.title,
                    "url":`https://webdevbysteve.online/${urlDir}/${lesson.slug}`
                }
            })
            
        }

        return schema;
}