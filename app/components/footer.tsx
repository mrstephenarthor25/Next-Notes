"use client";


import { CopyIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState,useEffect } from "react";

export default function Footer({placeholder}:{placeholder:string}){

    let pathName = usePathname();
    const currentUrl = typeof window !== "undefined" ?  `${window.location.origin}${pathName}`:'';

     let [copy, setCopy] = useState(false);
        
        let addToClipBoard = ()=>{
            navigator.clipboard.writeText(currentUrl)
            .then(()=>{
                setCopy(true);
            })
            .catch(err=>{
                alert("Sorry: Faild to copy")
            })
        }
    
        useEffect(()=>{
    
            if(copy){
                setTimeout(()=>{
                    setCopy(false)
                },3000)
            }
        },[copy]);
    
    return <footer className="px-9 py-2 border border-solid rounded-md  mt-[50px] mb-0">
        
        <span className="block text-md font-bold lg:text-lg text-gray-500">Would you like to share this Note?</span>
        <span className="text-gray-500">Simply copy and share this link</span>
        <div className="px-3 py-2 flex items-center gap-2">
            <input type="text" className="flex-1"placeholder={currentUrl} readOnly/> 
             {copy == false && <CopyIcon className="text-blue-500" onClick={addToClipBoard}/>} 
             {copy == true && <small className="text-sm">Copied</small>}   

        </div> 
    </footer>
}