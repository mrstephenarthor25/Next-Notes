

type FaqEntry = {
    question:string,
    expectedAnswer:string
}
type content = {
    title:string,
    slug:string,
    page:string,
    faq?: FaqEntry[],
    publish?:boolean
}

export const contents = [
    {
        title:"What is Next.js?",
        slug:"What-is-Nextjs",
        page:"What_is_Nextjs",
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
        page:"create"
    },

    {
        title:"Did you like the notes?",
        slug:"Did-you-like-the-notes",
        page:"learn_more"
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

export async function getAllContents(){

    return contents;
}