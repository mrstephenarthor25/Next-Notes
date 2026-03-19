import Image from "next/image";
import Link from "next/link";


export default function LessonCard({title,desc,illustration,active,url}:{title:string,desc:string,illustration:string,active:boolean,url:string}){

    return <div className="w-full relative min-h-[70vh] flex-1 rounded-md md:block">
        {/* image area */}
        <div className="h-[40vh] flex-1 relative">
            <Image src={"/images/"+illustration} alt="" fill={true} className="block mb-5"/>
        </div>
        <div className="flex-1 min-h-30vh bottom-0 left-0 right-0 px-5 py-3 pb-9 bg-white border-rounded-lg shadow-lg shadow-blue-300 ">
            <h3 className="">{title}</h3>
            <p className="text-[20px]">{desc}</p>
            {
                active && <Link href={url} className="border border-solid rounded-full px-3 py-2">Take a look</Link> 
            }

            {
                active == false && <span className="text-blue-500 text-center">Working on this</span>
            }
        </div>
    </div>
}