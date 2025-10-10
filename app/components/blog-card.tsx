import Link from "next/link"

export default function ListCard({title,descr,url}:{title:string,descr:string|undefined,url:string}){

    return <div className="border border-solid rounded-md px-3 py-4 my-3 overflow-hidden ">

        <h3>{title}</h3>
        <p>{descr}</p>

        <Link className="border border-solid border-blue-900 text-blue-900 rounded-sm px-4 py-3 inline-block mt-5"href={url}>Learn</Link>

    </div>
}