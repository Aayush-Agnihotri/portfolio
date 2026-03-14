"use client";

import { TechnicalData } from "./technical/TechnicalData";
import { ProjectData } from "./projects/ProjectData";
import { WorkData } from "./work/WorkData";
import { useEffect, useState, useRef, KeyboardEvent } from "react";

type HistoryEntry = {
  command: string;
  output: React.ReactNode;
};

export default function Terminal() {
  const [isClient, setIsClient] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const welcomeMessage = (
    <div className="w-full flex flex-col items-center">
      <pre className="whitespace-pre leading-tight mb-2 text-[7px] sm:text-[9px] md:text-[11px] overflow-x-auto max-w-full text-left">
        <span className="block font-semibold bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
{`    █████╗  █████╗ ██╗   ██╗██╗   ██╗███████╗██╗  ██╗      ██████╗██╗     ██╗
   ██╔══██╗██╔══██╗╚██╗ ██╔╝██║   ██║██╔════╝██║  ██║     ██╔════╝██║     ██║
   ███████║███████║ ╚████╔╝ ██║   ██║███████╗███████║     ██║     ██║     ██║
   ██╔══██║██╔══██║  ╚██╔╝  ██║   ██║╚════██║██╔══██║     ██║     ██║     ██║
   ██║  ██║██║  ██║   ██║   ╚██████╔╝███████║██║  ██║     ╚██████╗███████╗██║
   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚══════╝╚═╝  ╚═╝      ╚═════╝╚══════╝╚═╝`}
        </span>
      </pre>
      <p className="text-gray-300 mb-1 text-center">
        Explore <span className="text-cyan-400">projects</span>, <span className="text-cyan-400">skills</span>, <span className="text-cyan-400">work</span>, and <span className="text-cyan-400">awards</span>.
      </p>
      <p className="text-gray-300 text-center">
        Type <span className="text-cyan-400">help</span> to get started.
      </p>
      <br />
    </div>
  );

  const commands = {
    help: (
      <div className="xl:max-w-xl">
        <p>
          &gt; <span className="text-cyan-400">awards</span> - displays a list
          of my awards
        </p>
        <p>
          &gt; <span className="text-cyan-400">clear</span> - clears the
          terminal window
        </p>
        <p>
          &gt; <span className="text-cyan-400">help</span> - displays a list of
          commands
        </p>
        <p>
          &gt; <span className="text-cyan-400">projects</span> - displays a list
          of my projects
        </p>
        <p>
          &gt; <span className="text-cyan-400">resume</span> - displays a link
          to my resume
        </p>
        <p>
          &gt; <span className="text-cyan-400">skills</span> - displays a list
          of my technical skills
        </p>
        <p>
          &gt; <span className="text-cyan-400">website</span> - displays
          information about this website
        </p>
        <p>
          &gt; <span className="text-cyan-400">whoami</span> - displays
          information about me
        </p>
        <p>
          &gt; <span className="text-cyan-400">work</span> - displays a list of
          my work experience
        </p>
      </div>
    ),
    whoami: (
      <div className="xl:max-w-xl">
        <p>
          <span className="text-green-400">&gt;</span>{" "}
          <span className="text-yellow-300 font-semibold">
            Aayush Agnihotri
          </span>
        </p>
        <p>
          <span className="text-green-400">&gt;</span>{" "}
          <span className="text-blue-300">Cornell University</span>
        </p>
        <p>
          <span className="text-green-400">&gt;</span>{" "}
          <span className="text-purple-300">MEng in Computer Science</span>
        </p>
        <p>
          <span className="text-green-400">&gt;</span>{" "}
          <span className="text-gray-300">Background in </span>
          <span className="text-cyan-300">full stack development</span>
          <span className="text-gray-300"> and </span>
          <span className="text-cyan-300">machine learning</span>
        </p>
      </div>
    ),
    website: (
      <div className="xl:max-w-xl">
        <p>
          <span className="text-green-400">&gt;</span>{" "}
          <span className="text-gray-300">This website was created using </span>
          <span className="text-emerald-400 font-semibold">Next.js 15</span>
          <span className="text-gray-300"> and </span>
          <span className="text-sky-400 font-semibold">Tailwind CSS</span>
          <span className="text-gray-300">
            . To see the GitHub repository, click
          </span>{" "}
          <a
            className="text-blue-400 underline hover:text-blue-300 transition-colors"
            href="https://github.com/Aayush-Agnihotri/website"
            rel="noopener noreferrer"
            target="_blank"
          >
            here
          </a>
          <span className="text-gray-300">.</span>
        </p>
      </div>
    ),
    resume: (
      <div className="xl:max-w-xl">
        <p>
          <span className="text-green-400">&gt;</span>{" "}
          <a
            className="text-blue-400 underline hover:text-blue-300 transition-colors font-semibold"
            href="/documents/Aayush Agnihotri Resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            📄 Resume
          </a>
        </p>
      </div>
    ),
    awards: (
      <div className="xl:max-w-xl">
        <p>
          &gt;{" "}
          <span className="text-orange-400 font-semibold">JPMorgan Chase</span>{" "}
          <span className="text-yellow-300">🥇 First Place Winner</span>{" "}
          <span className="text-gray-300">
            at Technology for Social Good 2021
          </span>
        </p>
        <p>
          &gt; <span className="text-orange-400 font-semibold">TSA</span>{" "}
          <span className="text-yellow-300">🥇 First Place Winner</span>
          <span className="text-gray-300">
            {" "}
            State Software Development Competition 2021
          </span>
        </p>
        <p>
          &gt; <span className="text-orange-400 font-semibold">TSA</span>{" "}
          <span className="text-amber-300">🥉 Third Place Winner</span>
          <span className="text-gray-300">
            {" "}
            National Software Development Competition 2021
          </span>
        </p>
        <p>
          &gt;{" "}
          <span className="text-orange-400 font-semibold">JPMorgan Chase</span>{" "}
          <span className="text-yellow-300">🥇 First Place Winner</span>{" "}
          <span className="text-gray-300">
            at Technology for Social Good 2018
          </span>
        </p>
      </div>
    ),
    skills: (
      <div className="xl:max-w-xl">
        {TechnicalData.map((data, i) => (
          <p key={i}>
            <span className="text-green-400">&gt;</span>{" "}
            <span className="text-orange-400 font-semibold">{data.type}:</span>{" "}
            {data.skills.map((skill, j) => (
              <span key={j}>
                <span className="text-cyan-300">{skill.name}</span>
                {j !== data.skills.length - 1 ? (
                  <span className="text-gray-500">, </span>
                ) : (
                  ""
                )}
              </span>
            ))}
          </p>
        ))}
      </div>
    ),
    projects: (
      <div className="xl:max-w-xl">
        {ProjectData.map((data, i) => (
          <p key={i}>
            <span className="text-green-400">&gt;</span>{" "}
            <span className="text-orange-400 font-semibold">{data.name}:</span>{" "}
            <span className="text-gray-300">{data.description}</span>
            {data.links.app && (
              <>
                <span className="text-gray-500">{" ("}</span>
                <a
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  href={data.links.app}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  App Store
                </a>
                <span className="text-gray-500">{")"}</span>
              </>
            )}
            {data.links.deployment && (
              <>
                <span className="text-gray-500">{" ("}</span>
                <a
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  href={data.links.deployment}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Website
                </a>
                <span className="text-gray-500">{")"}</span>
              </>
            )}
            {data.links.other && (
              <>
                <span className="text-gray-500">{" ("}</span>
                <a
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  href={data.links.other.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {data.links.other.name}
                </a>
                <span className="text-gray-500">{")"}</span>
              </>
            )}
            {data.links.github && (
              <>
                <span className="text-gray-500">{" ("}</span>
                <a
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  href={data.links.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
                <span className="text-gray-500">{")"}</span>
              </>
            )}
          </p>
        ))}
      </div>
    ),
    work: (
      <div className="xl:max-w-xl">
        {WorkData.map((data, i) => (
          <p key={i}>
            <span className="text-green-400">&gt;</span>{" "}
            <span className="text-orange-400 font-semibold">
              {data.company}:
            </span>{" "}
            <span className="text-purple-300">{data.role}</span>{" "}
            <span className="text-gray-500">({data.date})</span>
          </p>
        ))}
      </div>
    ),
  };

  const errorMessage = (
    <div className="xl:max-w-xl">
      <p>
        &gt; Command not found. Please type &quot;help&quot; for a list of
        commands.
      </p>
    </div>
  );

  const themes = {
    "custom-theme": {
      themeBGColor: "#272B36",
      themeToolbarColor: "#DBDBDB",
      themeColor: "#FFFEFC",
      themePromptColor: "rgb(59 130 246)",
    },
  };

  const theme = themes["custom-theme"];

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === "clear") {
      setHistory([]);
      return;
    }

    const output = commands[trimmedCmd as keyof typeof commands] || errorMessage;
    
    setHistory((prev) => [...prev, { command: cmd, output }]);
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();

    if (e.key === "Enter") {
      e.preventDefault();
      if (input.trim()) {
        handleCommand(input);
        setInput("");
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  const stopInputKeyPropagation = (e: KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      {isClient ? (
        <div 
          className="flex flex-col w-full min-w-0 max-w-full max-h-[400px] overflow-hidden rounded-lg"
          style={{ backgroundColor: theme.themeBGColor }}
        >
          <div className="bg-[#2a2d38]/90 backdrop-blur-md border-b border-gray-700/50 h-10 w-full min-w-0 flex items-center px-4 z-50 rounded-t-lg -mb-[5px] flex-shrink-0">
            <div className="flex gap-2 w-16">
              <div
                className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors cursor-pointer flex items-center justify-center group"
                title="Close"
              >
                <span className="text-[#4d0000] text-[8px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  ✕
                </span>
              </div>
              <div
                className="w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#febc2e]/80 transition-colors cursor-pointer flex items-center justify-center group"
                title="Minimize"
              >
                <span className="text-[#6b5000] text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  &minus;
                </span>
              </div>
              <div
                className="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#28c840]/80 transition-colors cursor-pointer flex items-center justify-center group"
                title="Maximize"
              >
                <span className="text-[#004d15] text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  ⤢
                </span>
              </div>
            </div>
            <div className="flex-1 text-center text-gray-400 text-sm font-medium">
              me@terminal:~$
            </div>
            <div className="w-16"></div>
          </div>
          <div 
            ref={terminalRef}
            className="overflow-y-auto overflow-x-hidden flex-1 w-full min-w-0 hover:cursor-text p-4 font-mono text-base md:text-sm text-left rounded-b-lg"
            style={{ 
              backgroundColor: theme.themeBGColor,
              color: theme.themeColor 
            }}
            onClick={focusInput}
          >
            {/* Welcome message */}
            <div className="mb-4 text-left">{welcomeMessage}</div>

            {/* Command history */}
            {history.map((entry, index) => (
              <div key={index} className="mb-2 min-w-0 max-w-full text-left">
                <div className="flex min-w-0 max-w-full items-center mb-1 text-left">
                  <span className="shrink-0" style={{ color: theme.themePromptColor }}>
                    me@terminal:~${" "}
                  </span>
                  <span className="ml-1 min-w-0 break-all">{entry.command}</span>
                </div>
                <div className="mb-2 min-w-0 max-w-full overflow-hidden whitespace-pre-wrap break-words" style={{ overflowWrap: "anywhere" }}>
                  {entry.output}
                </div>
              </div>
            ))}

            {/* Input line */}
            <div className="flex items-center min-w-0 max-w-full">
              <span className="shrink-0" style={{ color: theme.themePromptColor }}>
                me@terminal:~${" "}
              </span>
              <input
                aria-label="Terminal command input"
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onKeyUp={stopInputKeyPropagation}
                className="flex-1 min-w-0 ml-1 bg-transparent outline-none border-none block-cursor"
                style={{ color: theme.themeColor }}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
