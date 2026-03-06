"use client";

import Terminal from "./Terminal";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    e.preventDefault();
  };

  return (
    <div id="about" className="bg-gray-50 py-10 text-center">
      <div className="w-4/5 mx-auto flex flex-col gap-5 items-center">
        <div className="flex flex-col">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h1 className={`text-4xl font-bold`}>About Me</h1>
            </motion.div>
          </div>

          <div className="mt-5 flex flex-col gap-10 justify-center items-center xl:items-start xl:flex-row xl:gap-20">
            <div className={`w-4/5 mx-auto text-center xl:w-1/3`}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xl text-gray-500">
                  I am currently a student at{" "}
                  <span className="text-red-500">Cornell University</span>,
                  pursuing a{" "}
                  <span className="text-blue-500">Master of Engineering</span>{" "}
                  degree in{" "}
                  <span className="text-blue-500">Computer Science</span>. I
                  have experience in{" "}
                  <span className="text-green-500">software engineering</span>,
                  primarily in{" "}
                  <span className="text-green-500">
                    full stack development and machine learning.
                  </span>
                </p>
                <br></br>
                <p className="text-xl text-gray-500">
                  I aim to leverage{" "}
                  <span className="text-orange-500">technology and data</span>{" "}
                  to build <span className="text-orange-500">innovative</span>{" "}
                  products that help people.
                </p>
                <br></br>
                <p className="text-xl text-gray-500">
                  Aside from school and programming, I enjoy working out at the
                  gym 🏋️, listening to music 🎵, or playing soccer ⚽.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                ref={ref}
                onClick={(e) => handleClick(e)}
                onFocus={(e) => handleInputFocus(e)}
                className={`max-h-unit-7xl overflow-x-hidden hover:cursor-text flex self-end`}
              >
                <Terminal />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
