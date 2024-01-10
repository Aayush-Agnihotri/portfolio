"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from "@nextui-org/react";
import { faEnvelope, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { InlineWidget } from "react-calendly";

export default function Contact() {
  return (
    <div id='contact' className='bg-gray-50 py-5'>
      <div className='mx-auto flex flex-col gap-5 items-center'>
        <div className='flex flex-col items-center text-center w-4/5'>
          <h1 className='text-4xl font-bold'>Contact Me</h1>
          <p className='text-xl font-semibold text-gray-500'>Feel free to shoot me an email or schedule a coffee chat through Calendly below.</p>
        </div>

        <div className='container mx-auto flex justify-center gap-5 flex-wrap lg:gap-20'>
          <div className='flex flex-col gap-5 justify-center text-center'>
            <div className='flex justify-evenly md:justify-start'>
              <Tooltip content='Email' showArrow={true} placement='left' closeDelay={0}>
                <a href='mailto:aa2328@cornell.edu' className='hover:opacity-60 flex items-center' rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faEnvelope} size='2x' />&nbsp; aa2328@cornell.edu &nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2xs' />
                </a>
              </Tooltip>
            </div>
            <div className='flex justify-evenly md:justify-start'>
              <Tooltip content='LinkedIn' showArrow={true} placement='left' closeDelay={0}>
                <a href='https://www.linkedin.com/in/aayush-agnihotri/' className='hover:opacity-60 flex items-center' rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} size='2x' />&nbsp; linkedin.com/in/aayush-agnihotri &nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2xs' />
                </a>
              </Tooltip>
            </div>
            <div className='flex justify-evenly md:justify-start'>
              <Tooltip content='GitHub' showArrow={true} placement='left' closeDelay={0}>
                <a href='https://github.com/Aayush-Agnihotri' className='hover:opacity-60 flex items-center' rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon icon={faGithub} size='2x' />&nbsp; github.com/Aayush-Agnihotri &nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2xs' />
                </a>
              </Tooltip>
            </div>
          </div>

          <div className='w-4/5 md:w-96'>
            <InlineWidget
              url={"https://calendly.com/aayush-agnihotri"}
              styles={{
                height: "500px",
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}