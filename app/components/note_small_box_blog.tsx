import { ReactNode } from "react"
import Image from "next/image";

import boxImage from '../../public/staycation.jpg';


export function NoteArea(){

    return  <div className="relative w-full h-[30vh] rounded-[30px]  shadow-md flex justify-center">
                <Image  src={boxImage} alt="A boy in the garden" fill={true} className="rounded-[20px]" priority/>      
            </div>
}