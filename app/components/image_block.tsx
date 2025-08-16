
import Image from "next/image";
import { CopyBlock } from "./copy";

type prop = {
    src:string,
    alt:string,
    copy?:boolean,
    link?:boolean,
    link_src?:string
}
export function ImageBlock({src,alt,copy}:prop){

    return <div className="px-3 h-[30vh]  md:px-[30px] ">

            
            <div className="h-full relative rounded-[20px]">
                <Image src={src} alt={alt} fill={true} className="rounded-[20px]" priority/>
            </div>

            {copy && <CopyBlock/>}
    </div>

}