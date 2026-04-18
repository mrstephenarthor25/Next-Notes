"use client"; 

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeftIcon,ArrowRightIcon } from 'lucide-react';


// Using Embla Carousel v8
export default function Slider({cards,cardCount}:{cards:React.ReactNode,cardCount?:number}){

const [emblaRef,emblaApi] = useEmblaCarousel({loop:true,slidesToScroll:cardCount? cardCount:1});


const scrollPrev = () => emblaApi?.scrollPrev()
const scrollNext = () => emblaApi?.scrollNext()


  return (
    <div className="embla w-full md:w-[60%] border border-solid shadow-xl/30 rounded-[9%]  bg-white ">
      <div className="embla__viewport rounded-[9%]" ref={emblaRef}>
        <div className="embla__container h-full rounded-[9%]">
          {/* <div className="embla__slide border">Slide 1</div>
          <div className="embla__slide border">Slide 2</div>
          <div className="embla__slide border">Slide 3</div> */}
          {cards}
        </div>
      </div>
    
    <div className='flex justify-around'>
        <button className="embla__prev" onClick={scrollPrev}><ArrowLeftIcon/></button>
        <button className="embla__next" onClick={scrollNext}><ArrowRightIcon/></button>
    </div>
      
    </div>
  )
}
