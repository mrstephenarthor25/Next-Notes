import { ReactNode } from "react";

export default function MySection({children}:{children:ReactNode}){

    return <section className="py-5 border-t border-t-solid border-t-gray-100">

        {children}

    </section>
}