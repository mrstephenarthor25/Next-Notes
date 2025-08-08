import { ReactNode } from "react";
import { SmilePlus } from "lucide-react";

export default function Pun({children}:{children:ReactNode}){

    return <div className="border border-solid mb-[20px] rounded-sm px-3 py-2">
        <span className="block flex gap-3 text-lg mb-3"><SmilePlus/> Uneccessary pun alert!</span>
        <p className="pl-2">{children? children:""}</p>
    </div>
}