
import LiveSessionCard from "../general_ui/live_session_card";
import { liveSessions } from "@/app/_db/live_sessions";
import Slider from "../general_ui/client/slider";

export default function LiveSection(){

    const blogPost_card = liveSessions.map((liveSession,id)=>{
        return <LiveSessionCard key={id}
                    title={liveSession.title} 
                    url="#"
                    alt={liveSession.alt}
                    imageUrl={liveSession.imageUrl} 
                    description={liveSession.description} 
                    mustHave = {[]}/>
    })

    return <div id="live-session" className="flex flex-col  md:flex-row">

     {/* slider container */}
        <div className="h-max flex-1 flex  items-center justify-start py-5 order-2 md:order-1">
            <Slider cards={blogPost_card}/> 
        </div>

    {/*Descriptive text  */}
    <div className="flex-1 flex items-center order-1 md:order-2">
            <div className="px-9">
                <h2 className="text-[30px]">Learn live with a tutor to guide you every step</h2>
                <p className="m-0">Live mentorship sessions designed to help beginners builid real skills with structure, accountability, and support</p>
            </div>
        </div>
    </div>

}