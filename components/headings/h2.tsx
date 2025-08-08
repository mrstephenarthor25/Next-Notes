import React from "react";
import { ReactNode } from "react";


export default function MyH2({children,text}:{children:ReactNode, text:string}){

    return <h2 className="text-3xl">
        {children}
    </h2>
}