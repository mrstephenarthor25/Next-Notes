import { LiveInterface } from "@/app/_db/live_sessions";
import { MessageCircle } from "lucide-react";
import { ListCheckIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LiveSessionCard({title,description,imageUrl}:LiveInterface){

    return <div className={`embla__slide h-fit rounded-[9%] relative`}>

        {/* image container */}
        <div className="h-[30vh] relative rounded-[9%] m-0" >
             <Image src={imageUrl} fill={true} alt="learn " className="absolute rounded-[9%] m-0"/> 
        </div>

        <div className="h-[50%] m-0">
            
            <div className="m-2">
                <strong className="text-bold">{title}</strong>
                <p className="text-sm m-0 py-3">{description}</p>
            </div>
            
            <div className="pb-4 m-2 flex gap-3">
                <Link href="#" className="block  flex-1 text-blue-900 flex justify-around bg-white text-black border py-3 rounded-full">Join the waitlist <ListCheckIcon/></Link>
                <Link href="#" className="block  flex-1 text-blue-900 flex bg-white justify-around text-black border py-3 rounded-full">learn more <MessageCircle/> </Link>
            </div>

        </div>


    </div>
}