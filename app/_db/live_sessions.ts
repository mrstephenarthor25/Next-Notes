export interface LiveInterface {

    title:string,
    imageUrl:string,
    slug:string,
    description:string,
    mustHave:string[],
    url:string,
    alt:string
}

export const liveSessions:LiveInterface[] = [
    {
        title:"HTML and CSS live Training for beginners",
        imageUrl:"/images/general_ui/learn_HTML.jpg",
        slug:"live-HTML-and-CSS-Training-for-beginners",
        description:"Learn how real websites are built from scratch in live and guided environment. This begineer friendly training covers HTML structure, CSS styling, layouts, responsiveness, and best practices through mentorship and practical excercises. Perfect for anyone starting website development who wants clear explanations, structued learning, and real-time support",
        url:"",
        alt:"Learn how to build beautiful websites (HTML and CSS) with mentorsihp and support",
        mustHave:[
            "A computer",
            "A browser installed on your computer"
        ]
    },

    {
        title:"Frontend Foundations for beginners (HTML, CSS, Javascript and TypeScript)",
        imageUrl:"/images/general_ui/learn_HTML.jpg",
        slug:"live-frontend-development-training-for-beginners",
        description:"Build strong frontend development skills through structured live sessionis focused on real understanding, not memorization. You'll learn how websites become interactive using JavaScript and TypeScript while strengthening your HTML and CSS foundations. This live session is ideal for beginners ready to move from HTML basics to building interactive web pages",
        url:"",
        alt:"Learn how to build beautiful websites using HTML, CSS, JavaScrip and TypeScript",
        mustHave:[
            "A computer",
            "A browser installed on your computer"
        ]
    },

     {
        title:"Fullstack web development Foundations mentorship program",
        imageUrl:"",
        slug:"live-fullstack-development-mentorship-for-beginners",
        description:"A complete beginner-to-fullstack learning experience designed to help you understand how modern websites work from frontend interfaces to backend logic. This live mentorship program covers HTML,CSS,JavaScript, TypeScript, and PHP, guiding you through building real-world applications step by step with instructor support",
        url:"",
        alt:"Learn how to build fullstack websites (foundations)",
        mustHave:[
            "A computer",
            "A browser installed on your computer"
        ]
    }
]