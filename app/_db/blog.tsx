

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
        faq:[{
            question:"Do I have to use the App Router in Next.js 15?",
            expectedAnswer:"No - You don't have to use the App Router in your Next.js 15 project. The Pages Router is still supported, but the App Router is the modern default and it gives you newer features like nested layouts, server components and streaming, e.t.c"
        },
        {
            question:"Where should static assets be placed?",
            expectedAnswer:"static assests like images, fonts, and icons are stored in the public directory of your Next.js project structure. Files in this directory are served from the root path."
        },
        {
            question:"How does routing work with the app directory",
            expectedAnswer:"The page.tsx(or page.jsx if you're not using Typescript in your Next.js project) file in the app directory is the Ui component that is rendered when the '/' route is visited on your browser. To create other routes, you'll need to create another folder in the app directory with it's corresponding page.tsx (or page.jsx if you're not using Typescript) containing it's own UI component to be rendered. As an example, let's say you create a folder called notes in the app directory. The notes folder also has its page.tsx file. To visit that route in your browser, you need to enter the url '/notes'"
        }

    ]
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


