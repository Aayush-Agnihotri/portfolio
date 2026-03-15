"use client";

import React, { useState } from "react";
import { WorkData } from "./WorkData";
import WorkTimelineCard from "./WorkTimelineCard";

export default function WorkTimeline() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set()
  );

  const toggleExpanded = (company: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(company)) {
        newSet.delete(company);
      } else {
        newSet.add(company);
      }
      return newSet;
    });
  };

  return (
    <div className="mx-auto">
      <div className="flex flex-col space-y-6 relative">
        <div className="absolute left-1/2 top-24 bottom-0 w-px bg-gray-200 hidden md:block" />

        {WorkData.map((exp, index) => (
          <WorkTimelineCard
            key={exp.company}
            experience={exp}
            index={index}
            isExpanded={expandedItems.has(exp.company)}
            onToggle={() => toggleExpanded(exp.company)}
          />
        ))}
      </div>
    </div>
  );
}
