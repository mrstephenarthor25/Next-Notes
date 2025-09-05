export default function Intro({children}:{children:string}){

    return <header className="text-gray-500 border-b border-solid border-gray-500 px-3 py-3 ">
       <strong> What You’ll Learn </strong>

        {children}
    </header>

}