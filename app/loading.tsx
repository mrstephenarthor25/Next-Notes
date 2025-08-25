import Image from "next/image";
import loader from "@/app/load-31.gif";

export default function PageLoader(){

    return <><div className="text-center">

        <Image src={loader} height={100} width={100} alt=""/>
    </div>
    <p className="text-center">Loading the note...</p>
    </>
}