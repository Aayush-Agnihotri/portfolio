"use client";

import React, { useState } from "react";
import { WorkData } from "./WorkData";
import WorkTimelineCard from "./WorkTimelineCard";

export default function WorkTimeline() {
  const [expandedIndices, setExpandedIndices] = useState<Set<number>>(
    new Set()
  );

  const toggleExpanded = (index: number) => {
    setExpandedIndices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
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
            key={index}
            experience={exp}
            index={index}
            isExpanded={expandedIndices.has(index)}
            onToggle={() => toggleExpanded(index)}
          />
        ))}
      </div>
    </div>
  );
}
