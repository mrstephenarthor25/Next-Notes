import Link from "next/link";

export default function RecentCard({title,desc,url,date}:{title:string,desc:string,url:string,date:string}){

    return <Link className="min-h-[20vh] block px-5" href={url}>
        <div className="flex justify-around items-center">
            <div className="flex-3">
                <strong className="text-bold whitespace-nowrap mr-3">{title}</strong>
                <p className="text-sm text-left text-gray-500 w-[70%]">{desc}</p>
            </div>
            
            <div className="flex-1">
                <span className="text-sm text-gray-500 block ">{date}</span>
            </div>
        </div>
    </Link>
}