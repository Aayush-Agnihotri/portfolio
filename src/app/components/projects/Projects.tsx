import ProjectCard from "./ProjectCard"
import { ProjectData } from "./ProjectData"

export default function Projects() {
  return (
    <div id="projects" className='flex flex-col py-10'>
      <div className='flex flex-col items-center mb-5 text-center'>
        <h1 className='text-4xl font-bold'>Projects</h1>
      </div>
      <div className='container mx-auto w-4/5 flex flex-col gap-5 wrap'>
        {ProjectData.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </div>
  )
}