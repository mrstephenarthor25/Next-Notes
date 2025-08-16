import React from "react";
import { ReactNode } from "react";


export default function MainHeading({children}:{children:ReactNode}){

    return <>
        <h1 className="text-3xl">
            {children}
        </h1>
    </>
}