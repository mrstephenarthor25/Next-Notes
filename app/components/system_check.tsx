import { CheckCircle, XCircle } from "lucide-react"

export default function Check({result}:{result:{status:boolean, errors?:string[]}}){

    return <div>

        {result.status == true && 
        <div className="text-center">
            <CheckCircle className="text-teal-500 inline-block"/>
           <p>Your device is set for creating a Next.js app</p>
        </div>
        }
        {result.status == false && 
        <div className="text-center">
            <XCircle className="inline-block text-red-500"/>
            <p>Oops, your device isn't set up to create a Next.js app using the latest version of Next.js yet</p>

            <small >
                 <em>At least Node v18.17 required</em>
            </small>    
        </div>}

    </div>
}