export default function SmallInfoBox({flag,question,answer}:{flag:boolean,question:string,answer:string}){

    return <div>

        <span>{question} <button>open</button></span>

        <div>
            <p>{answer}</p>
        </div>
               
    </div>
}