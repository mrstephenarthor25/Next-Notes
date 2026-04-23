import { NoteInterface } from "@/app/_db/notes";
import Link from "next/link";
import Image from "next/image";

export default function PictureCard({title,description,imageUrl,ready,url,alt}:NoteInterface){

    return <div className={`embla__slide min-h-[65vh] rounded-[9%] relative shadow-lg h-fit`}>

         <Image src={imageUrl} fill={true} alt={alt} className="absolute rounded-[9%]"/> 

        <div className="h-max absolute left-0 right-0 bottom-0 z-3 bg-gray-900/90">
            
            <div className="px-3">
                <strong className="text-bold text-white block py-3">{title}</strong>
                <p className="text-sm text-white max-h-[15vh]   overflow-y-scroll rounded-[5%]">{description}</p>
            </div>
            
            <div className="px-3 py-3 flex gap-3 items-center">
            
                {/* <span className="text-white flex flex-col justify-center items-center"><Star className="text-amber-600"/>43</span> */}
                {ready && <Link href={url} className=" checkout_btn block w-full bg-white text-center text-black border py-3 rounded-full transition duration-300 ease-in-out hover:cursor-pointer hover:shadow-sm shadow-white hover:bg-indigo-900 hover:text-white ">Check it out</Link>}
                {ready == false && <span className="  block text-center w-full text-white py-3 rounded-md ">Coming shortly</span>}
            </div>

        </div>


    </div>
}