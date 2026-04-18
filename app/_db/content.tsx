import { blogposts } from "./blog"

type FaqEntry = {
    question:string,
    expectedAnswer:string
}
export type  content = {

    title:string,
    slug:string,
    page:string,
    desc?:string,
    reslove: ()=>Promise<{default:React.ComponentType<React.ReactNode>}>,
    faq?: FaqEntry[],
    publish?:boolean,
    category?:string

}




// type blog = {
//     title:string,
//     slug:string,
//     page:string,
//     desc?:string,
//     reslove: ()=>Promise<{default:React.ComponentType<any>}>,
//     faq?: FaqEntry[],
//     publish?:boolean,

// }

// notes content
export const contents: content[] = [
    {
        category:"Getting Started",
        title:"What is Next.js?",
        slug:"What-is-Nextjs",
        page:"What_is_Nextjs",
        desc:"What is Next.js? This beginner-friendly guide shows what it is, why it matters, and how it extends React—making fast, SEO-friendly apps easy to build",
        reslove:()=>import("@/mdx/notes/What_is_Nextjs.mdx"),
        faq:[
           {
            question:"What is Next.js?",
            expectedAnswer:"<p>Next.js is a fullstack framework built on top of React. <br> This means you get all the power of React - components, hooks, and everything you love - but with extra helpful features to help you build fullstack web applications out of the box</p>"
           },

           {
            question:"Is Next.js a full stack framework?",
            expectedAnswer:"<p>Yes,Next.js is a fullstack framework built on top of React. <br> This means you get all the power of React - components, hooks, and everything you love, but with backend features as well</p>"
           }
        ],
        publish:true
    },

    {
        category:"Getting Started",
        title:"How to create a Next.js app",
        slug:"How-to-create-a-Next.js-app",
        page:"create",
        desc:"Learn how to create a Next.js app with this beginner-friendly guide. This 5-step walkthrough is designed to make your Next.js learning journey simple and clear.",
        reslove:()=>import("@/mdx/notes/create.mdx"),
    },

    {
        category:"Getting Started",
        title:"Next.js 15 project Structure",
        slug:"Next.js-project-Structure",
        page:"structure",
        desc:"Learn about the Next.js 15 project stucture in a simple, beginner-friendly way. Understand what each default folder and file is used for, when to use the src directory and common mistakes to avoid in your Next.js projects",
        reslove:()=>import("@/mdx/notes/structure.mdx"),
    },

    {
        title:"Routing in Next.js 15",
        slug:"Routing-in-Next.js-15",
        page:"routing",
        reslove:()=>import("@/mdx/notes/routing_intro.mdx")
    },

    {
        title:"Did you like the notes?",
        slug:"Did-you-like-the-notes",
        page:"learn_more",
        reslove:()=>import("@/mdx/notes/learn_more.mdx")
    },
    
]


// blog content


export async function getContent(slug:string){

    const content = contents.find((entry)=>{

        if(entry.slug.toLocaleLowerCase() == slug.toLocaleLowerCase()){

            return entry;
        }
    });


    if(content){
        return content;
    }

    return null;
}

export async function getBlogPost(slug:string){

    const content = blogposts.find((entry)=>{

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

export async function getAllContents(){

    return contents;

}

export async function getAllNextContent({start,numberOfContent}:{start?:number,numberOfContent?:number}){
    
    if(start == null){
        return contents
    }

    if(Number(start) >= 0){

        const result = contents.filter((content,id)=>{
            const batch = start + (numberOfContent? numberOfContent:4)
            if(id < batch){
                return content
            }
        })

        return result;
    }
}

