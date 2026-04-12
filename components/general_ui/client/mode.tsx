"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ModeChange(){

    const {setTheme} = useTheme();

    const setLight = ()=>{
        setTheme("light")
    }

    const setDark = ()=>{
            setTheme("dark")
    }

    return <span className="flex gap-3">
          
            <button onClick={()=>{
                setLight()
            }}><SunIcon className="text-purple-900"/></button>
            <button onClick={()=>{
                setDark()
            }}><MoonIcon className="text-gray-400"/></button>

            </span>
}