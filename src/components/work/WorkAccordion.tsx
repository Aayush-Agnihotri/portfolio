"use client"

import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { WorkData } from "./WorkData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";

export interface WorkDataInterface {
  company: string;
  role: string;
  date: string;
  details: string[];
  icon: IconDefinition;
}

export default function WorkAccordion() {
  const accordionRef = useRef(null);
  const accordionIsVisible = useIsVisible(accordionRef);

  return (
    <div ref={accordionRef} className={`ease-in transition-all duration-1000
        ${accordionIsVisible ? "translate-y-0" : "translate-y-20"}
        ${accordionIsVisible ? "opacity-100" : "opacity-0"}`}>
      <Accordion selectionMode="multiple" variant="splitted" defaultExpandedKeys={["0", "1", "2", "3", "4"]}>
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
              <p className='pb-3'></p>
            </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
