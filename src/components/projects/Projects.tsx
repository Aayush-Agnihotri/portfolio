"use client"

import ProjectCard from "./ProjectCard"
import { ProjectData } from "./ProjectData"
import { useRef } from "react"
import { useIsVisible } from "@/hooks/useIsVisible"

export default function Projects() {
  const headerRef = useRef(null);
  const headerIsVisible = useIsVisible(headerRef);

  return (
    <div id="projects" className='flex flex-col py-10'>
      <div className='flex flex-col items-center mb-5 text-center'>
        <h1 ref={headerRef} className={`text-4xl font-bold ${headerIsVisible ? "animate-in slide-in-from-bottom duration-500" : ""}`}>Projects</h1>
      </div>
      <div className='container mx-auto w-4/5 flex flex-col gap-5 wrap'>
        {ProjectData.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  )
}