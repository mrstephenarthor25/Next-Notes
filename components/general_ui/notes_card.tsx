import Link from "next/link";
import Image from "next/image";

export default function ContentCard({title,description,imageUrl,url,alt}:{title:string,description:string,imageUrl:string,url:string,alt?:string}){

    return <div className="flex min-h-[30vh] justify-center">
                <div className="block md:flex md:w-[70%] gap-3 mb-3">

                        <div className="flex-1 relative">
                            <Image src={imageUrl} fill={true} alt={alt?alt:""} className="absolute rounded-full"/> 
                        </div>

                        
                        <div className="transition-all ease-in-out shadow-md rounded-xl px-5 py-3 relative block flex-4 hover:shadow-lg hover:shadow-blue-900/50">
                           <h2 className="text-[30px] mb-0 px-3">{title}</h2>
                           <p className=" h-[60%] overflow-y-auto px-3 md:w-[80%]">{description}</p>
                           
                           <div className=" md:absolute bottom-3 right-3 px-3 py-3">
                                <Link className="bg-blue-900 text-white px-5 py-3 rounded-md" href={url}>Open</Link>
                            </div>
                        </div>


                </div>
            </div> 
    
}