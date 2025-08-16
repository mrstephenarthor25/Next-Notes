"use client";

import { Copy } from "lucide-react";
import React, { useEffect } from "react";
import { useState } from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { ReactNode } from "react";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

type prop = {
    children: {props:{children:string | string[]}};
    title:string,
    lang:string,
    numbers?:boolean

}
export default function CodeBLock({children,title,lang,numbers}:prop){

    let [copy, setCopy] = useState(false);
    
    let addToClipBoard = ()=>{
        navigator.clipboard.writeText(children.props.children.toString())
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

    return <div className="px-1 mt-3 mb-[20px] md:px-3">
                <div className="border border-solid rounded-sm ">
                    <div className=" bg-gray-50 px-3 py-2 border-b border-solid flex 
                    items-center justify-between text-sm"> 
                        <span title="Enter this piece of code below in your code editor" 
                        className="flex items-center gap-3"><span className="border border-solid rounded-sm px-2 py-1 bg-gray-300 text-white text-xs ">{lang}</span> {title}</span>
                        {copy && <span className="text-sm rounded-md px-3 py-2">copied</span>}
                        {copy==false &&
                        <button className="cursor-pointer transition-all hover:text-blue-700 " onClick={_=>addToClipBoard()}>
                                <Copy/>
                        </button>
                        }
                    </div>
                    <SyntaxHighlighter 
                        language = {lang}
                        style = {nightOwl}
                        showLineNumbers={numbers?numbers:false}
                        customStyle={{
                            padding:'2rem 0.9rem',
                            fontSize:'0.9rem',
                            backgroundColor:'black',
                            margin:'0'
                        }}>
                        {children? children.props.children : "No code passed in"}
                    </SyntaxHighlighter>
                    </div>
        </div>
}