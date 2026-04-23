import Image from "next/image"
import ModeChange from "./client/mode"
import Navigation from "./navigation"

export default function Header(){

    return <header className="flex justify-between items-center px-[9%] py-5 md:gap-5">

        {/* logo */}
        <div className="relative flex items-center"><Image src="/icon.png" alt="WebDevBySteve logo" width={80} height={80}/><span>WebDevBySteve</span></div>

        {/* navigation */}
        <Navigation/>


        {/* join button */}
        {/* <CallToAction text="Join the watilist" url="Register#"/> */}

        {/* light mode button */}
        {/* <div className="hidden md:block">
            <ModeChange/>
        </div> */}
    </header>

}