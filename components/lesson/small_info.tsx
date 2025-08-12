export default function SmallInfoBox({flag,question,answer}:{flag:boolean,question:string,answer:string}){

    return <div className="px-3">

        <span>{question} <button>open</button></span>

        <div>
            <p>{answer}</p>
        </div>
               
    </div>
}