"use client"

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { WorkData } from "./WorkData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export interface WorkDataInterface {
  company: string;
  role: string;
  date: string;
  details: string[];
  icon: IconDefinition;
}

export default function WorkAccordion() {

  return (
    <Accordion selectionMode="multiple" variant="splitted" defaultExpandedKeys={["0"]}>
      {WorkData.map((data, i) => (
        <AccordionItem  
          key={i}
          aria-label={`${data.company}`}
          subtitle={`${data.role}`}
          title={`${data.company}`}
          startContent={<FontAwesomeIcon icon={data.icon} />}
          classNames={{ subtitle: "text-blue-500" }}
          indicator={<FontAwesomeIcon icon={faChevronLeft} />}
        >
          <p className='italic'>{data.date}</p>
          {data.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
