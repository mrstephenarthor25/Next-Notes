"use client";

import Slider from "./slider";
import { useRef } from "react";
import { useEffect } from "react";

export default function InteractiveDescriptiveSlider({content_list_card,cardCount}:{content_list_card:React.ReactNode, cardCount:number}){


    return  <section>
            <h2>Next.js 15 tutorials for beginners</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nulla corrupti ullam consectetur hic, beatae pariatur. Repellat, dignissimos tenetur! Vero.</p>
            {content_list_card}
        </section>
}