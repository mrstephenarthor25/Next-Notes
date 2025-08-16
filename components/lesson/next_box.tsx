import { ReactNode } from "react";
import Link from "next/link";
import { ArrowBigRight } from "lucide-react";

export default function NextBox({children,buttonText,link}:{children:ReactNode, buttonText:string,link:string}){

    return <div className="border border-solid px-3 py-5 w-full rounded-md text-center mt-3  ">

            <span className="text-base block">Next up</span>
            <h2 className="text-lg font-bold my-2">{children? children:""}</h2>
            <button className="w-full bg-black text-white rounded-md px-3 py-5 cursor-pointer transition-all hover:text-black hover:bg-white hover:shadow-sm">
                <Link href={link}>{buttonText} <ArrowBigRight className="inline"/></Link>
            </button>

    </div>
}