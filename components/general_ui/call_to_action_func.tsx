import Link from "next/link";
import { ArrowUpCircle } from "lucide-react";

export default function CallToActionFunc({text,func}:{text:string,func:()=>{}}){

    return <button onClick={func} className=" hidden border border-gray-400 rounded-full md:flex justify-between items-center w-[30%]">
            <span>{text}</span>
            <span><ArrowUpCircle className="text-[80px] rotate-[45deg] text-blue-500  h-[40px] w-[40px] rounded-full"/></span>
    </button>
}