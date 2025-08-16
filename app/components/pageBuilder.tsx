import type { Element } from "../types/custom";
import { ImageBlock } from "./image_block";

type prop = {
    content: Element[]
}
export function PageBuilder({content}:prop){

    const page_build = content.map((element,index)=>{

        switch(element.type){
            case "h1": return <h1 className="font-bold text-[25px] my-5 "key={index}> {element.content}</h1>
            case "h2": return <h2 className="font-bold text-[18px] my-3" key={index}> {element.content}</h2>
            case "p": return <p className="my-2" key={index}>{element.content}</p>
            case "img":
                        if(element.src !== undefined){
                            return <ImageBlock  key={index} src={`/${element.src}`} alt="" />
                        }else{
                            throw new Error("Image source is not provided")
                        }
        }
    })

    return page_build;
}