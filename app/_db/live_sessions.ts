export interface LiveInterface {

    title:string,
    imageUrl:string,
    description:string,
    mustHave:string[],
    url:string,
}

export const liveSessions:LiveInterface[] = [
    {
        title:"HTML and CSS live Training for beginners",
        imageUrl:"/images/general_ui/learn_HTML.jpg",
        description:"Learn how real websites are built from scratch in a guieded live environment. This begineer friendly training covers HTML structure, CSS styling, layouts, responsiveness, and best practices through mentorship and practical excercises. Perfect for anyone starting website development who wants clear explanations, structued learning, and real-time support",
        url:"",
        mustHave:[
            "A computer",
            "A browser installed on your computer"
        ]
    },

    {
        title:"Frontend Foundations for beginners (HTML, CSS, Javascript and TypeScript)",
        imageUrl:"/images/general_ui/learn_HTML.jpg",
        description:"Build strong frontend development skills through structured live sessionis focused on real understanding, not memorization. You'll learn how websites become interactive using JavaScript and TypeScript while strengthening your HTML and CSS foundations. This live session is ideal for beginners ready to move from HTML basics to building interactive web pages",
        url:"",
        mustHave:[
            "A computer",
            "A browser installed on your computer"
        ]
    },

     {
        title:"Fullstack Foundations live session",
        imageUrl:"",
        description:"A complete beginner-to-fullstack learning experience designed to help you understand how modern websites work from frontend interfaces to backend logic. This live mentorship program covers HTML,CSS,JavaScript, TypeScript, and PHP, guiding you through building real-world applications step by step with instructor support",
        url:"",
        mustHave:[
            "A computer",
            "A browser installed on your computer"
        ]
    }
]