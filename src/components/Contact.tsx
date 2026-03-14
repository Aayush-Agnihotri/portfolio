"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip, Input, Textarea, Button } from "@nextui-org/react";
import {
  faEnvelope,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-50 py-5">
      <div className="mx-auto flex flex-col gap-5 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center w-4/5"
        >
          <h1 className="text-4xl font-bold">Contact Me</h1>
          <p className="text-xl font-semibold text-gray-500">
            Feel free to shoot me an email or reach out through the form below.
          </p>
        </motion.div>

        <div className="container mx-auto flex justify-center gap-5 flex-wrap lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col gap-5 justify-center text-center"
          >
            <div className="flex justify-evenly md:justify-start">
              <Tooltip
                content="Email"
                showArrow={true}
                placement="left"
                closeDelay={0}
              >
                <a
                  href="mailto:aa2328@cornell.edu"
                  className="hover:opacity-60 flex items-center"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  &nbsp; aa2328@cornell.edu &nbsp;
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" />
                </a>
              </Tooltip>
            </div>
            <div className="flex justify-evenly md:justify-start">
              <Tooltip
                content="LinkedIn"
                showArrow={true}
                placement="left"
                closeDelay={0}
              >
                <a
                  href="https://www.linkedin.com/in/aayush-agnihotri/"
                  className="hover:opacity-60 flex items-center"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                  &nbsp; linkedin.com/in/aayush-agnihotri &nbsp;
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" />
                </a>
              </Tooltip>
            </div>
            <div className="flex justify-evenly md:justify-start">
              <Tooltip
                content="GitHub"
                showArrow={true}
                placement="left"
                closeDelay={0}
              >
                <a
                  href="https://github.com/Aayush-Agnihotri"
                  className="hover:opacity-60 flex items-center"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                  &nbsp; github.com/Aayush-Agnihotri &nbsp;
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" />
                </a>
              </Tooltip>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-4/5 md:w-96 flex flex-col gap-4 py-4"
          >
            <form className="flex flex-col gap-4 w-full" action="https://formspree.io/f/mdawdwaa" method="POST">
              <Input
                type="text"
                name="name"
                label="Name"
                placeholder="Enter your name"
                isRequired
                variant="bordered"
              />
              <Input
                type="email"
                name="email"
                label="Email"
                placeholder="Enter your email"
                isRequired
                variant="bordered"
              />
              <Textarea
                name="message"
                label="Message"
                placeholder="Enter your message"
                isRequired
                variant="bordered"
                minRows={5}
              />
              <Button type="submit" color="primary" className="w-full font-semibold text-lg py-6">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
