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
        <h1 ref={headerRef} className={`text-4xl font-bold ${headerIsVisible ? "animate-in slide-in-from-bottom duration-500" : ""}`}>Work Experience</h1>
      </div>

      <div className='container w-4/5 mx-auto'>
        <WorkAccordion />
      </div>
    </div>
  )
}