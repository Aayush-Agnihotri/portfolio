"use client"

import Terminal from "./Terminal"
import { RevealWrapper } from "next-reveal"

export default function About() {

  return (
    <div id='about' className='bg-gray-50 py-10 text-center'>
      <div className='w-4/5 mx-auto flex flex-col gap-5 items-center'>
        <div className='flex flex-col'>
          <div>
            <RevealWrapper>
              <h1 className={`text-4xl font-bold`}>About Me</h1>
            </RevealWrapper>
          </div>
          
          <div className='mt-5 flex flex-col gap-10 justify-center xl:flex-row xl:gap-20'>
            <div className={`w-4/5 mx-auto text-center xl:w-1/3`}>
              <RevealWrapper origin="bottom">
              <p className='text-xl text-gray-500'>I am currently a student at <span className='text-red-500'>Cornell University</span>, majoring in <span className='text-blue-500'>Computer Science</span> with a minor in <span className='text-blue-500'>Business</span>. I have experience in <span className='text-blue-500'>software engineering</span>, primarily in <span className='text-blue-500'>web and full stack development.</span></p>
              <br></br>
              <p className='text-xl text-gray-500'>I aim to leverage <span className='text-blue-500'>technology and data</span> to build <span className='text-blue-500'>useful and innovative</span> products.</p>
              <br></br>
              <p className='text-xl text-gray-500'>Aside from school and programming, I enjoy working out at the gym 🏋️, listening to music 🎵, or playing soccer ⚽.</p>
              </RevealWrapper>
            </div>

            <RevealWrapper origin="bottom">
              <div className={`min-h-unit-7xl max-h-unit-7xl overflow-x-hidden overflow-y-hidden hover:cursor-text bg-[#272B36] rounded-lg`}>
                <Terminal />
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </div>
  )
}