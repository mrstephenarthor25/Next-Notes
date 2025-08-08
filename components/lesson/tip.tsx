import { ReactNode } from "react";
import { InfoIcon } from "lucide-react";

export default function Tip({children}:{children:ReactNode}){

    return <div className="border border-solid rounded-md px-3 py-2 my-5 text-sm-important">

    <span> <InfoIcon/> </span>
    {children}

    </div>
}