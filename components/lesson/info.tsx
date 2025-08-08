import { ReactNode } from "react";

export default function Info({children}:{children:ReactNode}){

    return <div className="bg-gray-50 border border-solid roundeded-md border-gray-100 px-3 py-2 my-5">
    
            <span className="text-[20px] font-bold block mb-5">Did you know?</span>
            {children}
    </div>
}