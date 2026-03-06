"use client";

import { TechnicalData } from "./TechnicalData";
import { TechnicalCard } from "./TechnicalCard";
import { motion } from "framer-motion";

export default function Technical() {
  return (
    <div
      id="experience"
      className="flex flex-col py-10 gap-5 bg-gray-50 text-center"
    >
      <div className="flex flex-col items-center mb-5">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold"
        >
          Technical Experience
        </motion.h1>
      </div>

      <div className="w-4/5 mx-auto flex flex-wrap gap-14 justify-center">
        {TechnicalData.map((data) => (
          <TechnicalCard key={data.type} {...data} />
        ))}
      </div>
    </div>
  );
}
