import Image from "next/image";
import Link from "next/link";

export function Nav(){

    return <div className="flex items-center justify-between">

        <div>
            <Link href={"/"}>
            <span className="font-bold flex flex-col gap-3">My<Image
                      className="dark:invert"
                      src="/next.svg"
                      alt="Next.js logo"
                      width={180}
                      height={38}
                      priority
                    />
                    Notes
                  </span>
            </Link>
            
        </div>

        <div className="flex-1 flex justify-center font-bold gap-4">

            <Link href={"/"}>Home</Link>
            <Link href={"/coffee"}>Buy me Coffee</Link>
        </div>
    </div>
}