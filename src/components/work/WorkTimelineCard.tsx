"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { WorkDataInterface } from "./WorkData";

interface WorkTimelineCardProps {
  experience: WorkDataInterface;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function WorkTimelineCard({
  experience,
  index,
  isExpanded,
  onToggle,
}: WorkTimelineCardProps) {
  return (
    <div
      className={`w-[95%] md:w-3/4 mx-auto ${index % 2 === 0 ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"} z-10`}
    >
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
        onClick={onToggle}
      >
        <div className="p-5 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 overflow-hidden">
              <Image
                src={experience.image}
                alt={`${experience.company} logo`}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-bold text-gray-900 text-lg leading-tight">
                {experience.company}
              </h2>
              <p className="text-sm text-gray-500 font-medium">
                {experience.role}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-xs sm:text-sm font-semibold text-gray-700">
              {experience.date}
            </span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon icon={faChevronDown} />
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="px-5 pb-6 pt-2 border-t border-gray-50">
                <ul className="space-y-3 mb-6">
                  {experience.details.map((detail: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-gray-600 leading-relaxed"
                    >
                      <span className="mr-3 text-blue-500">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {experience.skills && (
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-[11px] font-bold rounded-full uppercase tracking-wider"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
