import Image from "next/image";

export default function TextInImage({text,src,alt}:{text:string,src:string,alt:string}){


    return <div className="h-[20vh] rounded-md relative flex items-center justify-center">

            <Image src={src} fill={true} alt={alt} loading="lazy"/>
            <span className="text-center text-xl">{text}</span>

    </div>

}