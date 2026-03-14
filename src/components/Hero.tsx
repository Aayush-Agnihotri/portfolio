"use client";

import { useState, useEffect, useRef } from "react";
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
import type { WebGLFluidConfig } from "webgl-fluid";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fluidConfigRef = useRef<WebGLFluidConfig | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      import("webgl-fluid")
        .then((module) => {
          const WebGLFluid = module.default;
          const config = {
            TRIGGER: "hover", // Can be 'click', 'hover', 'immediate', 'auto'
            IMMEDIATE: true, // Trigger immediately on load
            AUTO: false, // Automatically trigger splats
            INTERVAL: 0, // Interval for auto splats
            SIM_RESOLUTION: 128, // Resolution of the simulation grid
            DYE_RESOLUTION: 512, // Resolution of the dye grid
            CAPTURE_RESOLUTION: 512, // Resolution of captured frames
            DENSITY_DISSIPATION: 0.5, // Rate at which density dissipates
            VELOCITY_DISSIPATION: 0.1, // Rate at which velocity dissipates
            PRESSURE: 0.1, // Pressure value
            PRESSURE_ITERATIONS: 20, // Number of pressure iterations
            CURL: 3, // Curl value (vorticity)
            SPLAT_RADIUS: 0.1, // Radius of splats
            SPLAT_FORCE: 4000, // Force of splats
            SPLAT_COUNT: 0, // Number of splats on load
            SHADING: true, // Enable shading
            COLORFUL: true, // Enable colorful splats
            COLOR_UPDATE_SPEED: 10, // Speed of color update
            PAUSED: false, // Pause simulation
            BACK_COLOR: { r: 255, g: 255, b: 255 }, // Background color
            TRANSPARENT: false, // Transparent background
            BLOOM: true, // Enable bloom
            BLOOM_ITERATIONS: 4, // Number of bloom iterations
            BLOOM_RESOLUTION: 256, // Resolution of bloom
            BLOOM_INTENSITY: 0.5, // Intensity of bloom
            BLOOM_THRESHOLD: 0.8, // Threshold for bloom
            BLOOM_SOFT_KNEE: 0.7, // Soft knee for bloom
            SUNRAYS: false, // Enable sunrays
            SUNRAYS_RESOLUTION: 196, // Resolution of sunrays
            SUNRAYS_WEIGHT: 0.4, // Weight of sunrays
          };
          fluidConfigRef.current = config;
          WebGLFluid(canvas, config);
        })
        .catch(() => {
          // Silently fail - WebGL fluid is a visual enhancement only
        });
    }

    return () => {
      // Cleanup: pause simulation on unmount
      if (fluidConfigRef.current) {
        fluidConfigRef.current.PAUSED = true;
      }
    };
  }, []);

  // Monitor hero section visibility and pause/resume simulation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (fluidConfigRef.current) {
            fluidConfigRef.current.PAUSED = !entry.isIntersecting;
          }
        });
      },
      { threshold: 0.1 }
    );

    const heroElement = canvasRef.current?.parentElement;
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

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
    <div className="relative w-full h-screen overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full" />
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center p-10 gap-5 h-screen md:gap-20 md:flex-row pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Image
            className="rounded-full relative border-2 border-white/50 shadow-xl"
            src="/images/headshot.webp"
            alt="Picture of Aayush Agnihotri"
            width={200}
            height={160}
            priority
            fetchPriority="high"
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
          <div className="flex gap-5 justify-center md:justify-start pointer-events-auto">
            <Tooltip
              content="Resume"
              showArrow={true}
              placement="bottom"
              closeDelay={0}
            >
              <a
                aria-label="Resume"
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
                aria-label="GitHub"
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
                aria-label="LinkedIn"
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
                aria-label="Email"
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
            initial={{ opacity: 1, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              repeatType: "reverse",
            }}
            className="absolute bottom-10 flex flex-col items-center gap-2 pointer-events-auto"
          >
            <a aria-label="Scroll down to about section" href="#about" className="hover:opacity-60 transition-colors">
              <FontAwesomeIcon icon={faChevronDown} size="2x" />
            </a>
          </motion.div>
        )}
      </div>
    </div>
  );
}
