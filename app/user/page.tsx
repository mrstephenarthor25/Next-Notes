import Link from "next/link";
import { getUser } from "../_db/user";

export default function UserPage(){

    let users = getUser(-1);

    let dislplay = users?.map((user,key)=>{
        return <li key={key}><Link href={"user/"+key}>{user.name} </Link></li>
    })

    return <>
        <h2>This is the user page</h2>
        <ul>
            {dislplay}
        </ul>

    </>
}   