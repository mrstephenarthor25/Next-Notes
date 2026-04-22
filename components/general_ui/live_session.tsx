import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export default function MentorshipCard({title,description,imageUrl,url,alt}:{title:string,description:string,imageUrl:string,url:string,alt?:string}){

    return <div className="flex min-h-[30vh] justify-center">
                <div className="block md:flex md:w-[80%] gap-3 mb-3">

                        <div className="flex-[1.5] relative">
                            <Image src={imageUrl} fill={true} alt={alt?alt:""} className="absolute rounded-full"/> 
                        </div>

                        
                        <div className="transition-all ease-in-out shadow-md rounded-xl px-5 py-3 relative block flex-4 hover:shadow-lg hover:shadow-blue-900/50">
                           <h2 className="text-[30px] mb-0 px-3">{title}</h2>
                           <p className=" h-[50%] overflow-y-auto px-3 pb-9 md:w-[80%]">{description}</p>
                           
                           <div className=" md:absolute flex bg-transparent bottom-0 right-0 left-0">
                                <Link href={url} className="flex gap-3 px-3 py-3 bg-blue-800 text-white">Learn more <MessageCircle/></Link>
                            </div>
                        </div>


                </div>
            </div> 
    
}