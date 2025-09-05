import Image from "next/image";

export default function SampleImage({src,alt, caption}:{src:string, alt:string, caption:string}){

    return <div className="w-full px-3 py-3 my-5 relative">

            <Image src={src} alt={alt} height={500} className="w-auto lg:w-[500px] lg:h-auto "/>

            <em className="font-oblique block text-[12px] text-center text-gray-500 py-5">{caption}</em>
    </div>
}