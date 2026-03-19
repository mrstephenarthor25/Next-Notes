import React from "react";
import { ReactNode } from "react";


export default function MyH4({children}:{children:ReactNode, text:string}){

    return <h4 className="text-xl">
        {children}
    </h4>
}