import React from "react";
import { ReactNode } from "react";


export default function MainHeading({children,text}:{children:ReactNode, text:string}){

    return <h1 className="text-5xl my-3">
        {children}
    </h1>
}