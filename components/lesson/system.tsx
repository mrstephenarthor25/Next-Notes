import { ReactNode, useEffect, useState } from "react";
import { ComputerIcon } from "lucide-react";
import check_device from "@/app/actions/system";
import Check from "@/app/components/system_check";


export default async function System({children,button_text}:{children:ReactNode, button_text:string}){

    let result = await check_device() ;
    
// result == true? setSuccess(true):setFail(true);

    return <div className=" hidden my-9 px-3 py-2 border border-solid border-gray-500 rounded-md text-[14px] lg:block">
        <div className="mb-5">
            <ComputerIcon className="text-[8px] font-[8px]"/> 
        </div>

        <span className="text-[14px]">
            {children}
        </span>

        <Check result={result}/>
    </div>
}