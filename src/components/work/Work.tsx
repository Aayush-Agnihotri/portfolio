"use client"

import WorkAccordion from './WorkAccordion'
import { useRef } from "react"
import { useIsVisible } from "@/hooks/useIsVisible"

export default function Work() {
  const headerRef = useRef(null);
  const headerIsVisible = useIsVisible(headerRef);

  return (
    <div className='flex flex-col py-10'>
      <div className='flex flex-col items-center mb-5 text-center'>
        <h1 ref={headerRef} className={`text-4xl font-bold
        ease-in transition-all duration-1000
        ${headerIsVisible ? "translate-y-0" : "translate-y-20"}
        ${headerIsVisible ? "opacity-100" : "opacity-0"}`}>Work Experience</h1>
      </div>

      <div className='container w-4/5 mx-auto'>
        <WorkAccordion />
      </div>
    </div>
  )
}