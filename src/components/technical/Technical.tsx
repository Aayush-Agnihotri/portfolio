"use client"

import { TechnicalData } from "./TechnicalData"
import { TechnicalCard } from "./TechnicalCard"
import { useRef } from "react"
import { useIsVisible } from "@/hooks/useIsVisible"

export default function Technical() {
  const headerRef = useRef(null);
  const headerIsVisible = useIsVisible(headerRef);

  return (
    <div id='experience' className='flex flex-col py-10 gap-5 bg-gray-50 text-center'>
      <div className='flex flex-col items-center mb-5'>
        <h1 ref={headerRef} className={`text-4xl font-bold
        ease-in transition-all duration-1000
        ${headerIsVisible ? "translate-y-0" : "translate-y-20"}
        ${headerIsVisible ? "opacity-100" : "opacity-0"}
        `}>Technical Experience</h1>
      </div>

      <div className='w-4/5 mx-auto flex flex-wrap gap-14 justify-center'>
        {TechnicalData.map((data, _) => (
          <TechnicalCard
            key={data.type}
            {...data}
          />
        ))}
      </div>
    </div>
  )
}