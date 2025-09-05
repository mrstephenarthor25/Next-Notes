import { ReactNode } from "react";

export default function Info({children}:{children:ReactNode}){

    return <div className="border border-solid rounded-lg border-gray-500 px-4 py-2 my-5 text-[14px] md:text-[15px]">
    
            <span className="text-[14px] font-bold block mb-5">Good to know</span>
            {children}
    </div>
}