

type FaqEntry = {
    question:string,
    expectedAnswer:string
}

type blog = {
    title:string,
    slug:string,
    page:string,
    desc?:string,
    reslove: ()=>Promise<{default:React.ComponentType<any>}>,
    faq?: FaqEntry[],
    publish?:boolean,

}

// notes content
// blog content

export const blogposts: blog[] =  [
    {
        title:"Next.js 15 project Structure",
        slug:"Next.js-project-Structure",
        page:"structure",
        desc:"Learn about the Next.js 15 project stucture in a simple, beginner-friendly way. Understand what each default folder and file is used for, when to use the src directory and common mistakes to avoid in your Next.js projects",
        reslove:()=>import("@/mdx/blog/structure.mdx"),
    },

]

export async function getBlogPost(slug:string){

    let content = blogposts.find((entry)=>{

        if(entry.slug.toLocaleLowerCase() == slug.toLocaleLowerCase()){

            return entry;
        }
    });


    if(content){
        return content;
    }

    return null;
}

export async function getAllBlogPosts(){

    return blogposts;
}


