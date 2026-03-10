import Link from "next/link";

export default function RecentCard({title,desc,url}:{title:string,desc:string,url:string}){

    return <Link className="min-h-[20vh] block " href={url}>
        <div className="flex justify-around items-center">
            <div className="">
                <strong className="text-bold whitespace-nowrap mr-3">{title}</strong>
                <p className="text-sm text-left text-gray-500 w-[70%]">{desc}</p>
            </div>
            
            <div className="">
                <span className="text-sm text-gray-500">Date</span>
            </div>
        </div>
    </Link>
}