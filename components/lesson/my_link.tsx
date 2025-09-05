import Link from "next/link" ;
export default function MyLink({href,text}:{href:string,text:string}){

    return <Link href={href} className="text-blue-500 rounded-sm">

            {text}
    </Link>
}