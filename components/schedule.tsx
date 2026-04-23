"use client"
import { useEffect,useRef } from "react"

declare global {
    interface Window {
        calendar?:any
    }
}
export default function Schedule(){

const buttonRef = useRef<HTMLDivElement | null>(null);

useEffect(()=>{
    const script = document.createElement("script");
    script.src = "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;

    script.onload = ()=>{
        if(window.calendar && buttonRef.current){
            window.calendar.schedulingButton.load({
                url:'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3R5d_vgJu06ErdRQGCW00YNmE3cfyGjpGh54RlkX4yqIQO0FXKIRMEmaRqOdCk_LAkTso-brk0?gv=true',
                color:'#039BE5',
                label:"Book a call",
                target:buttonRef.current
            })
        }
    }
    document.body.appendChild(script)
},[])

return <> 
<div ref={buttonRef}></div>
<p className="text-sm text-gray-300">If the schedule button doesn&apos;t load, please refresh or check your internet connection</p>
</>
// return <> 
// <Link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet">
// <script src="https://calendar.google.com/calendar/scheduling-button-script.js" async></script>
// <script>

// try{

// (function() {
  
// let target = document.currentScript;
//   window.addEventListener('load', function() {
//     calendar.schedulingButton.load({
//       url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3R5d_vgJu06ErdRQGCW00YNmE3cfyGjpGh54RlkX4yqIQO0FXKIRMEmaRqOdCk_LAkTso-brk0?gv=true',
//       color: '#039BE5',
//       label: 'Book an appointment',
//       target,
//     });
//   });
// })()
// }catch(){

// }
// </script>

// </Link>

// </>
}