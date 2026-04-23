export interface NoteInterface {

    title:string,
    imageUrl:string,
    description:string,
    mustHave:string[],
    url:string,
    alt:string,
    older?:boolean,
    recentUrl?:string,
    ready:boolean // if at least one lesson is available in the lesson category
}

export const notes:NoteInterface[] = [
    {
        title:"Next.js 15 for beginners",
        imageUrl:"/images/lessons_card/next.js_15.jpg",
        description:"A simple and practical introduction to Next.js 15 designed for beginners transitioning into modern React development. You'll learn file based routing, components, navigation, data fetching and application structure through clear explanations and hands-on examples. This tutorial focuses on helping you understand concepts deeply instead of memorizing code",
        older:true,
        url:"/tutorials/nextjs-15",
        alt:"Learn how to create websites online using Next.js 15",
        recentUrl:"",
        mustHave:[
            "Have a computer",
            "Have a browser installed on your computer",
        ],
        ready:true
    },

    {
        title:"Next.js 16 for beginners",
        imageUrl:"/images/lessons_card/next.js_16.png",
        description:"Learn modern full-stack web development with Next.js 16 in a beginner friendly way. This tutorial explains routing, layouts, server componeents, data fetching, and real-world project structure using simple terms and examples that are easy to understand. By the end of this tutorial you would be able to build fast, production-ready web applications with Next.js 16",
        url:"",
        alt:"Learn how to create websites online using Next.js 16",
        mustHave:[
            "HTML",
            "CSS",
            "React Basics"
        ],
        ready:false
    },

     {
        title:"HTML for Complete Beginners",
        imageUrl:"/images/lessons_card/HTML.jpg",
        description:"Start your web development journey by learning HTML from the ground up. This is beginner-friendly tutorial teaches how websites are structured using headings, paragraphs, links, images, forms, and semantic elments. Each lesson is explained in simple terms so you can confidently build real web pages even if you have never written code before",
        url:"",
        alt:"Learn how to create websites online starting with HTML",
        mustHave:[
            "Have this",
            "Have this"
        ],
        ready:false
    }
]