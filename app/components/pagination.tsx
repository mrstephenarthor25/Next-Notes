import {ArrowLeft, ArrowRight} from "lucide-react"
import Link from "next/link"

export default function Pagination({prev,next, prevTitle, nextTitle}:{prev:string|undefined,next:string|undefined,prevTitle:string|undefined, nextTitle:string|undefined}){

    return  <div className="flex justify-between px-5 py-3">
                                {prev? <Link href={prev} className="flex-1 flex gap-3 items-end">
                                            <ArrowLeft className="text-gray-500"/>
                                            <div>
                                                <span className="text-sm text-gray-500">Previous</span>
                                                <strong className="block">{prevTitle}</strong>
                                            </div>
                                        </Link>:""}

                                {next? <Link href={next} className="flex-1 flex gap-3 items-end">
                                            <div>
                                                <span className="text-sm text-gray-500">Next</span>
                                                <strong className="block">{nextTitle}</strong>
                                            </div>

                                            <ArrowRight className="text-gray-500"/>

                                        </Link>:""}
                                    
                </div>
}