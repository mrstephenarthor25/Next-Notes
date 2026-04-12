import CallToActionFunc from "./call_to_action_func"
import CallToActionUrl from "./call_to_action_url"

export default function CallToAction({text,url,func}:{text:string,url?:string,func?:()=>{}}){

    if(url==null && func ==null){

        throw new Error("Sorry something went wrong, it would be fixed very soon")
    }else{

        return <>
            {url && <CallToActionUrl url={url} text={text}/>}

            {func && <CallToActionFunc text={text} func={func}/>}
            </>
    }
}