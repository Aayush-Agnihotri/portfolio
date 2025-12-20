"use client";

import React from "react";
import Image from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { WorkData } from "./WorkData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export interface WorkDataInterface {
  company: string;
  role: string;
  date: string;
  details: string[];
  image: string;
}

export default function WorkAccordion() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Accordion
        selectionMode="multiple"
        variant="splitted"
        defaultExpandedKeys={["0", "1", "2", "3", "4"]}
      >
        {WorkData.map((data, i) => (
          <AccordionItem
            key={i}
            aria-label={`${data.company}`}
            subtitle={`${data.role}`}
            title={`${data.company}`}
            startContent={
              <Image
                className="rounded-lg"
                src={data.image}
                alt={`${data.company} Image`}
                width={50}
                height={50}
              />
            }
            classNames={{ subtitle: "text-blue-500" }}
            indicator={<FontAwesomeIcon icon={faChevronLeft} />}
          >
            <p className="italic">{data.date}</p>
            {data.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
            <p className="pb-3"></p>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
}
