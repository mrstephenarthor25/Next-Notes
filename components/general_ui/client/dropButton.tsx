"use client"

import Link from "next/link"
import { useState } from "react"
import {ChevronDown} from "lucide-react"

type MenuItem = {
    text:string,
    url:string|null
}

export default function DropBtn({appendClass,buttonText,items,active}:{appendClass:string,buttonText:string,items:MenuItem[],active:string}){

    const [menu, setMenu] = useState(false);

    const menuItems = items.filter((item)=>{
        if(item.url != null){
            return item
        }
    })
    const menuItemsUi = menuItems.map((item,id)=>{
        return <li className={`hover:text-purple-900 transition-all ease-in-out ${active.toLowerCase().replaceAll("-"," ")==item.text.toLowerCase()? "border-b border-solid border-indigo-900":""}`}key={id}><Link href={item.url? item.url:"#"}>{item.text}</Link></li>
    })

    return <button className={"cursor-pointer relative flex items-center justify-around gap-3 transform-3d "+appendClass} onClick={()=>{
      
        setMenu(menu==false? true:false)
      
        
    }}>
                {buttonText} <ChevronDown className={`transition-all ease-in-out duration-300 rounded-full ${menu==true? "rotate-[180deg] shadow-md shadow-white":""}`}/>
               <div className={`bg-white w-max absolute top-full left-0 rounded-lg p-3 mt-1 shadow-md ${menu? "group-focus:scale-y-100 origin-top duration-200":"hidden"}`}>
                        <ul className="list-none m-0">
                            {menuItemsUi}
                        </ul>
                    </div>   
            </button>
}
