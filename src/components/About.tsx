"use client"

import Terminal from "./Terminal"
import { useRef } from "react"
import { useIsVisible } from "@/hooks/useIsVisible"

export default function About() {
  const titleRef = useRef(null);
  const titleIsVisible = useIsVisible(titleRef);
  const contentRef = useRef(null);
  const contentIsVisible = useIsVisible(contentRef);
  const terminalRef = useRef(null);
  const terminalIsVisible = useIsVisible(terminalRef);

  return (
    <div id='about' className='bg-gray-50 py-10 text-center'>
      <div className='w-4/5 mx-auto flex flex-col gap-5 items-center'>
        <div className='flex flex-col'>
          <div>
            <h1 ref={titleRef} className={`text-4xl font-bold ${titleIsVisible ? "animate-in slide-in-from-bottom duration-500" : ""}`}>About Me</h1>
          </div>
          
          <div className='mt-5 flex flex-col gap-10 justify-center xl:flex-row xl:gap-20'>
            <div ref={contentRef} className={`w-4/5 mx-auto text-center xl:w-1/3 ${contentIsVisible ? "animate-in slide-in-from-bottom duration-500" : ""}`}>
              <p className='text-xl text-gray-500'>I am currently a student at <span className='font-bold'>Cornell University</span>, majoring in <span className='font-bold'>Computer Science</span> with a minor in <span className='font-bold'>Business</span>. I have experience in <span className='font-bold'>software engineering</span>, primarily in <span className='font-bold'>web and full stack development.</span></p>
              <br></br>
              <p className='text-xl text-gray-500'>I aim to leverage technology and data to build useful and innovative products.</p>
              <br></br>
              <p className='text-xl text-gray-500'>Aside from school and programming, I enjoy working out at the gym 🏋️, listening to music 🎵, or playing soccer ⚽.</p>
            </div>

            <div ref={terminalRef} className={`min-h-unit-7xl max-h-unit-7xl overflow-x-hidden overflow-y-hidden hover:cursor-text bg-[#272B36] rounded-lg ${terminalIsVisible ? "animate-in slide-in-from-bottom duration-500" : ""}`}>
              <Terminal />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}