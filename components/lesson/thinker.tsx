import { ReactNode } from "react";

export default function Thinker({children}:{children:ReactNode}){

    return <div className="border border-solid rounded-lg border-gray-500 px-4 py-2 mt-9 my-5 text-[14px] md:text-[15px]">
    
            <span className="text-[14px] font-bold block mb-5">What do you think?</span>
            {children}
    </div>
}