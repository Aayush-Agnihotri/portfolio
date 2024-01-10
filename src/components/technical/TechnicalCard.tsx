"use client"

import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";
import { useRef } from "react";
import { useIsVisible } from "@/hooks/useIsVisible";

export interface TechnicalSkillInterface {
  name: string;
  text: string;
  imageUrl: string;
}

export interface TechnicalDataInterface {
  type: string;
  skills: TechnicalSkillInterface[];
}

export const TechnicalCard = ({ type, skills }: TechnicalDataInterface) => {
  const cardRef = useRef(null);
  const cardIsVisible = useIsVisible(cardRef);

  return (
    <div ref={cardRef} className={`w-4/5 md:w-64 ${cardIsVisible ? "animate-in slide-in-from-bottom duration-500" : ""}`}>
      <Card className="bg-gray-50">
        <CardHeader className="flex">
          <div className="pl-2 pt-2">
            <p className="text-xl font-semibold">{type}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="gap-5">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-row gap-5">
              <Image
                alt={`${skill.name} logo`}
                height={40}
                radius="sm"
                src={skill.imageUrl}
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">{skill.name}</p>
                <p className="text-sm text-default-500">{skill.text}</p>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
};