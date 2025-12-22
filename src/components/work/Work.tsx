"use client";

import WorkTimeline from "./WorkTimeline";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <div className="w-full flex flex-col py-10">
      <div className="flex flex-col items-center mb-5 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold"
        >
          Work & Leadership Experience
        </motion.h1>
      </div>

      <div className="container mx-auto">
        <WorkTimeline />
      </div>
    </div>
  );
}
