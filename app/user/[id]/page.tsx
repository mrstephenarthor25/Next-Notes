
import { getUser } from "@/app/_db/user";
import { Metadata } from "next";
import Link from "next/link";


type UserProp = {
    params:Promise<{id:string}>
}

export const metadata:Metadata = {
    title:"User Details",
    description:"See details of a partiucalar user"
}
export default async function UserProfile({params}:UserProp){

    let {id} =  await params;
    let {name,age,hobbie} = getUser(parseInt(id));

    let i = 0;
    return <>
        <Link href={"/"}>Go home</Link>
        <ul>
            <li key={i++}>{name}</li>
            <li key={i++}>{age}</li>
            <li key={i++}>{hobbie.toString()}</li>
        </ul>
    </>

}