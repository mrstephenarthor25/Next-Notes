export interface BlogInterface {

    title:string,
    imageUrl:string,
    description:string,
    mustHave:string[],
    url:string,
    ready:boolean // if at least on piece of content is ready under the blog category
}

export const blogPosts:BlogInterface[] = [
    {
        title:"Next.js 15",
        imageUrl:"/images/lessons_card/next.js_15.jpg",
        description:"Understand the core ideas behind Next.js 15 through practical explanations and real development examples. This blog explores routing, layouts, data fetching and application structure while helping you connect React fundmentals with modern framework workflows. Designed to help learners transition confidently from basic React Knowledge to professional web development practices",
        url:"/blog/Next.js-15-Folder-Structure-Explained-For-Beginners",
        mustHave:[
            "Have this",
            "Have this"
        ],
        ready:true
    },

    {
        title:"Next.js 16",
        imageUrl:"/images/lessons_card/next.js_16.png",
        description:"A detailed deep dive into Next.js 16 explaining how modern full-stack React applications work behind the scenes. This article breaks down server components, routing architecture, rendering strategies, performance improvements, and real-world development patterns in a clear and beginner friendly way. Perfect for developers who want to move beyond tutorials and truly understand Next.js concepts",
        url:"",
        mustHave:[
            "Have this",
            "Have this"
        ],
        ready:false
    },

     {
        title:"HTML",
        imageUrl:"/images/lessons_card/HTML.jpg",
        description:"A comprehensive beginner's guide to HTML that explains not just how to write tags, but why web pages are structured the way they are. This blog explores semantic HTML, accessibility, page structure, forms, and best practices used by real developers. Ideal for new learners who want a strong foundation before moving into css and JavaScript",
        url:"",
        mustHave:[
            "Have this",
            "Have this"
        ],
        ready:false
    }
]