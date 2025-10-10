

type FaqEntry = {
    question:string,
    expectedAnswer:string
}
type content = {
    title:string,
    slug:string,
    page:string,
    desc?:string,
    reslove: ()=>Promise<{default:React.ComponentType<any>}>,
    faq?: FaqEntry[],
    publish?:boolean,

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
export const contents: content[] = [
    // {
    //     title:"A brief review of the internet and websites",
    //     slug:"A-brief-review-of-the-internet-and-websites",
    //     page:"internet",
    //     reslove:()=>import("@/mdx/internet.mdx"),
    //     desc:"What is a website? This is a brief overview of websites, and frameworks. This overview starts from the dev",
    //     publish:true
    // },

    // {
    //     title:"A brief review of React",
    //     slug:"A-brief-review-of-React",
    //     page:"react",
    //     reslove:()=>import("@/mdx/react.mdx"),
    //     desc:"What is the react framework? This is a brief overview of websites, and frameworks. This overview starts from the dev",
    //     publish:true
    // },


    // {
    //     title:"The internet",
    //     slug:"The-internet",
    //     page:"internet",
    //     desc:"Description",
    //     publish:true
    // },

    {
        title:"What is Next.js?",
        slug:"What-is-Nextjs",
        page:"What_is_Nextjs",
        desc:"What is Next.js? This beginner-friendly guide shows what it is, why it matters, and how it extends React—making fast, SEO-friendly apps easy to build",
        reslove:()=>import("@/mdx/What_is_Nextjs.mdx"),
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
        title:"How to create a Next.js app",
        slug:"How-to-create-a-Next.js-app",
        page:"create",
        desc:"Learn how to create a Next.js app with this beginner-friendly guide. This 5-step walkthrough is designed to make your Next.js learning journey simple and clear.",
        reslove:()=>import("@/mdx/create.mdx"),
    },

    {
        title:"Next.js 15 project Structure",
        slug:"Next.js-project-Structure",
        page:"structure",
        desc:"Learn about the Next.js 15 project stucture in a simple, beginner-friendly way. Understand what each default folder and file is used for, when to use the src directory and common mistakes to avoid in your Next.js projects",
        reslove:()=>import("@/mdx/structure.mdx"),
    },


    {
        title:"Did you like the notes?",
        slug:"Did-you-like-the-notes",
        page:"learn_more",
        reslove:()=>import("@/mdx/learn_more.mdx")
    },
    
]


// blog content

const blogposts: blog[] =  [
    {
        title:"Next.js 15 project Structure",
        slug:"Next.js-project-Structure",
        page:"structure",
        desc:"Learn about the Next.js 15 project stucture in a simple, beginner-friendly way. Understand what each default folder and file is used for, when to use the src directory and common mistakes to avoid in your Next.js projects",
        reslove:()=>import("@/mdx/blog/structure.mdx"),
    },

]
export async function getContent(slug:string){

    let content = contents.find((entry)=>{

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

export async function getAllContents(){

    return contents;

}

