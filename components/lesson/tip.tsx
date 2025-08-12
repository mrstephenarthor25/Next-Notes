import { ReactNode } from "react";
import { InfoIcon } from "lucide-react";

export default function Tip({children}:{children:ReactNode}){

    return <div className="px-3">
            <div className="border border-solid rounded-md px-3 py-2 my-5 text-sm">

            <span> <InfoIcon/> </span>
            {children}

            </div>
    </div>
}