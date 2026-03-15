"use client";

import Image from "next/image";
import { Card, CardBody, Chip } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faAppStoreIos } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export interface ProjectDataInterface {
  name: string;
  stack: string[];
  description: string;
  imageUrl: string;
  links: {
    github: string;
    deployment?: string;
    app?: string;
    other?: {
      name: string;
      url: string;
    };
  };
}

const MotionCard = motion.create(Card);

export default function ProjectCard({
  project,
}: {
  project: ProjectDataInterface;
}) {
  return (
    <MotionCard
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <CardBody>
        <div className="flex flex-col gap-5 items-center lg:flex-row lg:items-start">
          <div>
            <Image
              className="rounded-lg"
              src={project.imageUrl}
              alt={`${project.name} Image`}
              width={400}
              height={400}
            />
          </div>
          <div className="w-11/12">
            <div className="flex flex-col gap-2 items-center lg:flex-row lg:gap-5 lg:items-start">
              <div>
                <h1 className="text-xl font-semibold mt-1">{project.name}</h1>
              </div>
              <div className="text-center xl:text-start">
                {project.stack.map((tech) => (
                  <Chip key={tech} color="primary" className="m-1">
                    {tech}
                  </Chip>
                ))}
              </div>
            </div>
            <p className="mx-auto text-md mt-3 text-center mb-5 lg:text-start">
              {project.description}
            </p>
            <div className="flex gap-5 items-center flex-wrap">
              {project.links.app && (
                <a
                  href={project.links.app}
                  aria-label={`${project.name} App Store Link`}
                  className="mx-auto lg:mx-0 px-10 py-2 bg-blue-500 text-gray-50 rounded-md text-lg flex flex-row items-center font-bold transition-opacity hover:opacity-80"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  App Store &nbsp;
                  <FontAwesomeIcon icon={faAppStoreIos} size="1x" />
                </a>
              )}
              {project.links.deployment && (
                <a
                  href={project.links.deployment}
                  aria-label={`${project.name} Website`}
                  className="mx-auto lg:mx-0 px-10 py-2 bg-blue-500 text-gray-50 rounded-md text-lg flex flex-row items-center font-bold transition-opacity hover:opacity-80"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Website &nbsp;
                  <FontAwesomeIcon icon={faLaptop} size="1x" />
                </a>
              )}
              {project.links.other && (
                <a
                  href={project.links.other.url}
                  aria-label={`${project.name} ${project.links.other.name}`}
                  className="mx-auto lg:mx-0 px-10 py-2 bg-blue-500 text-gray-50 rounded-md text-lg flex flex-row items-center font-bold transition-opacity hover:opacity-80"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {project.links.other.name} &nbsp;
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    size="xs"
                  />
                </a>
              )}
              <a
                href={project.links.github}
                aria-label={`${project.name} GitHub Repository`}
                className="mx-auto lg:mx-0 px-10 py-2 bg-blue-500 text-gray-50 rounded-md text-lg flex flex-row items-center font-bold transition-opacity hover:opacity-80"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github &nbsp;
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </a>
            </div>
          </div>
        </div>
      </CardBody>
    </MotionCard>
  );
}
