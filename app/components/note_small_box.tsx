import { ReactNode } from "react"
import Image from "next/image";

import boxImage from '../../public/note-small-bg.jpg';
type prop = {
    children: ReactNode
}
export function NoteArea(){

    return  <main className="relative w-full h-[30vh] rounded-[30px]  shadow-md flex justify-center">

                <Image  src={boxImage} alt="A boy in the garden" fill={true} className="rounded-[20px]"/>      
            
               
            </main>
}