import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from "@nextui-org/react";
import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Hero() {
  return (
    <div className='container mx-auto flex flex-col items-center justify-center h-50 p-10 gap-5 md:gap-20 md:flex-row'>
      <div className='flex items-center'>
        <Image className='rounded-full'
          src="/images/headshot.jpeg"
          alt="Picture of Aayush Agnihotri"
          width={200}
          height={160}
        />
      </div>
      <div className='flex flex-col'>
        <h1 className='text-5xl font-bold'>Hey, I&apos;m Aayush.</h1>
        <p className='text-xl font-semibold text-gray-500'>Text</p>
        <br></br>
        <div className='flex gap-5 justify-center md:justify-start'>
          <Tooltip content='Resume' showArrow={true} placement='bottom' closeDelay={0}>
            <Link className='hover:opacity-60' href='/documents/Aayush Agnihotri Resume.pdf'><FontAwesomeIcon icon={faFileLines} size='2x' /></Link>
          </Tooltip>
          <Tooltip content='GitHub' showArrow={true} placement='bottom' closeDelay={0}>
            <a href='https://github.com/Aayush-Agnihotri' className='hover:opacity-60' rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faGithub} size='2x' />
            </a>
          </Tooltip>
          <Tooltip content='LinkedIn' showArrow={true} placement='bottom' closeDelay={0}>
            <a href='https://www.linkedin.com/in/aayush-agnihotri/' className='hover:opacity-60' rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size='2x' />
            </a>
          </Tooltip>
          <Tooltip content='Email' showArrow={true} placement='bottom' closeDelay={0}>
            <a href='mailto:aa2328@cornell.edu' className='hover:opacity-60' rel="noopener noreferrer" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} size='2x' />
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}
