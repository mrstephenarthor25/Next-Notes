import { Copy } from "lucide-react";
import { TerminalSquare } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
export default function TerminalBLock({text}:{text:string}){


    let addToClipBoard = ()=>{

        console.log("added to clickboard ",text);
    }

    return <div className="px-1 mt-3 md:px-3">
                <div className="border border-solid rounded-sm ">
                            <div className=" bg-gray-50 px-3 py-2 border-b border-solid flex items-center justify-between text-sm"> 
                                <span title="Enter this piece of code below in your terminal" className="flex items-center "><TerminalSquare/>Terminal</span>
                                <button className="cursor-pointer transition-all hover:text-blue-700 ">
                                        <Copy/>
                                </button>
                            </div>
                            <SyntaxHighlighter 
                            language="bash"
                            style={nightOwl}
                            customStyle={{
                                padding:'3px 8px',
                                fontSize:'0.9rem',
                                margin:'0'
                            }}>{text}</SyntaxHighlighter>
                    </div>
        </div>
}