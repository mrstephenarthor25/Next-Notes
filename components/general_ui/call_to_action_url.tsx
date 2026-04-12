import Link from "next/link";
import { ArrowUpCircle } from "lucide-react";

export default function CallToActionUrl({text,url}:{text:string,url:string}){

    return <Link href={url} className="hidden border border-gray-400 rounded-full md:flex justify-between items-center w-[30%]" title="Join the waitlist for the live program"> 
            <span className="block px-3">{text}</span>
            <span className="block"><ArrowUpCircle className="text-[80px] rotate-[45deg] text-blue-500  h-[40px] w-[40px] rounded-full"/></span>
    </Link>
}