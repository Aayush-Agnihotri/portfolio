"use client"

import { ReactTerminal } from "react-terminal";
import { TechnicalData } from "./technical/TechnicalData";
import { ProjectData } from "./projects/ProjectData";
import { WorkData } from "./work/WorkData";
import { useEffect, useState } from "react";

export default function Terminal() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
  },[])

  const welcomeMessage =
    <div>
      Welcome to <span className='text-orange-400'>Aayush&apos;s</span> terminal emulator!
      <br />
      Type a command to begin or <span className='text-cyan-400'>help</span> to see a list of commands.
      <br />
      <br />
    </div>

  const commands = {
    help:
    <div className='xl:max-w-xl'>
      <p>&gt; <span className='text-cyan-400'>awards</span> - displays a list of my awards</p>
      <p>&gt; <span className='text-cyan-400'>clear</span> - clears the terminal window</p>
      <p>&gt; <span className='text-cyan-400'>help</span> - displays a list of commands</p>
      <p>&gt; <span className='text-cyan-400'>projects</span> - displays a list of my projects</p>
      <p>&gt; <span className='text-cyan-400'>resume</span> - displays a link to my resume</p>
      <p>&gt; <span className='text-cyan-400'>skills</span> - displays a list of my technical skills</p>
      <p>&gt; <span className='text-cyan-400'>website</span> - displays information about this website</p>
      <p>&gt; <span className='text-cyan-400'>whoami</span> - displays information about me</p>
      <p>&gt; <span className='text-cyan-400'>work</span> - displays a list of my work experience</p>
    </div>
    ,
    whoami: 
    <div className='xl:max-w-xl'>
      <p>&gt; Aayush Agnihotri</p>
      <p>&gt; Cornell University</p>
      <p>&gt; MEng in Computer Science</p>
      <p>&gt; Background in full stack development and machine learning</p>
    </div>,
    website: 
    <div className='xl:max-w-xl'>
      <p>&gt; This website was created using Next.js 14 and Tailwind CSS. To see the GitHub repository, click <a className='hover:opacity-60' href="https://github.com/Aayush-Agnihotri/website" rel="noopener noreferrer" target="_blank">here</a>.</p>
    </div>,
    resume: 
    <div className='xl:max-w-xl'>
      <p>&gt; <a className='hover:opacity-60' href='/documents/Aayush Agnihotri Resume.pdf' rel="noopener noreferrer" target="_blank">Resume</a></p>
    </div>,
    awards:
    <div className='xl:max-w-xl'>
      <p>&gt; <span className='text-orange-400'>JPMorgan Chase</span> First Place Winner at Technology for Social Good 2021</p>
      <p>&gt; <span className='text-orange-400'>TSA</span> First Place Winner State Software Development Competition 2021</p>
      <p>&gt; <span className='text-orange-400'>TSA</span> Third Place Winner National Software Development Competition 2021</p>
      <p>&gt; <span className='text-orange-400'>JPMorgan Chase</span> First Place Winner at Technology for Social Good 2018</p>
    </div>,
    skills:
    <div className='xl:max-w-xl'>
      {TechnicalData.map((data, i) => 
      <p key={i}>&gt; <span className='text-orange-400'>{data.type}:</span> {data.skills.map((skill, j) => <span key={j}>{skill.name}{j != 3 ? ", " : ""}</span>)}</p>)}
    </div>,
    projects:
    <div className='xl:max-w-xl'>
      {ProjectData.map((data, i) => 
      <p key={i}>&gt; <span className='text-orange-400'>{data.name}:</span> {data.description}
        {data.links.app && <><span>{" ("}</span><a href={data.links.app} rel="noopener noreferrer" target="_blank">App Store</a><span>{")"}</span></>}
        {data.links.deployment && <><span>{" ("}</span><a href={data.links.deployment} rel="noopener noreferrer" target="_blank">Website</a><span>{")"}</span></>}
        {data.links.other && <><span>{" ("}</span><a href={data.links.other.url} rel="noopener noreferrer" target="_blank">{data.links.other.name}</a><span>{")"}</span></>}
        {data.links.github && <><span>{" ("}</span><a href={data.links.github} rel="noopener noreferrer" target="_blank">GitHub</a><span>{")"}</span></>}
      </p>)}
    </div>,
    work:
    <div className='xl:max-w-xl'>
      {WorkData.map((data, i) => 
      <p key={i}>&gt; <span className='text-orange-400'>{data.company}:</span> {data.role} ({data.date})</p>)}
    </div>,
  };

  const errorMessage = (
    <div className='xl:max-w-xl'>
      <p>&gt; Command not found. Please type &quot;help&quot; for a list of commands.</p>
    </div>
  )

  const themes = {
    "custom-theme": {
      themeBGColor: "#272B36",
      themeToolbarColor: "#DBDBDB",
      themeColor: "#FFFEFC",
      themePromptColor: "rgb(59 130 246)"
    }
  }

  return (
    <>{isClient ? 
      <div>
        <ReactTerminal
          className='hover:cursor-text min-h-unit-7xl max-h-unit-7xl overflow-x-hidden fixed'
          commands={commands}
          prompt={"me@terminal:~$ "} 
          welcomeMessage={welcomeMessage}
          enableInput={true}
          showControlBar={false}
          showControlButtons={false}
          errorMessage={errorMessage}
          theme={"custom-theme"}
          themes={themes}
        />
      </div>
    : <></>}</>
  );
}