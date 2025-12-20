"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Tooltip } from "@nextui-org/react";
import {
  faEnvelope,
  faFileLines,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const listenToScroll = () => {
      let heightToHideFrom = 650;
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > heightToHideFrom) {
        isVisible && setIsVisible(false);
      } else if (winScroll < 50) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [isVisible]);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-10 gap-5 h-screen md:gap-20 md:flex-row">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center"
      >
        <Image
          className="rounded-full"
          src="/images/headshot.jpeg"
          alt="Picture of Aayush Agnihotri"
          width={200}
          height={160}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center md:items-start"
      >
        <h1 className="text-4xl font-bold">Hey, I&apos;m Aayush.</h1>
        <div className="h-5">
          <span className="text-xl mt-1 font-semibold text-blue-500">
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "Student",
                  "Open Source Contributor",
                  "Entrepreneur",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <br></br>
        <div className="flex gap-5 justify-center md:justify-start">
          <Tooltip
            content="Resume"
            showArrow={true}
            placement="bottom"
            closeDelay={0}
          >
            <a
              href="/documents/Aayush Agnihotri Resume.pdf"
              className="hover:opacity-60"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFileLines} size="2x" />
            </a>
          </Tooltip>
          <Tooltip
            content="GitHub"
            showArrow={true}
            placement="bottom"
            closeDelay={0}
          >
            <a
              href="https://github.com/Aayush-Agnihotri"
              className="hover:opacity-60"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </Tooltip>
          <Tooltip
            content="LinkedIn"
            showArrow={true}
            placement="bottom"
            closeDelay={0}
          >
            <a
              href="https://www.linkedin.com/in/aayush-agnihotri/"
              className="hover:opacity-60"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </Tooltip>
          <Tooltip
            content="Email"
            showArrow={true}
            placement="bottom"
            closeDelay={0}
          >
            <a
              href="mailto:aa2328@cornell.edu"
              className="hover:opacity-60"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </Tooltip>
        </div>
      </motion.div>

      {isVisible && (
        <motion.div
          id="arrow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-10"
        >
          <a href="#about" className="hover:opacity-60">
            <FontAwesomeIcon icon={faChevronDown} size="2x" />
          </a>
        </motion.div>
      )}
    </div>
  );
}
