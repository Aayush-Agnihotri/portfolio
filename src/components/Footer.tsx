import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from "@nextui-org/react";
import { faEnvelope, faFileLines } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div className='mx-auto flex flex-col items-center justify-center p-10 gap-3 bg-blue-500'>
      <div>
        <a href='/'>
          <Image
            src="/images/logo-dark.png"
            alt="Aayush Agnihotri Logo"
            width={35}
            height={35}
          />
        </a>
      </div>
      <div>
        <h1 className='font-bold text-white'>Aayush Agnihotri &copy; 2025</h1>
      </div>
      <div className='flex justify-center gap-5'>
        <Tooltip content='Resume' showArrow={true} placement='bottom' closeDelay={0}>
          <a href='/documents/Aayush Agnihotri Resume.pdf' className='hover:opacity-60' rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faFileLines} size='2x' color='white' /></a>
        </Tooltip>
        <Tooltip content='GitHub' showArrow={true} placement='bottom' closeDelay={0}>
          <a href='https://github.com/Aayush-Agnihotri' className='hover:opacity-60' rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon icon={faGithub} size='2x' color='white' />
          </a>
        </Tooltip>
        <Tooltip content='LinkedIn' showArrow={true} placement='bottom' closeDelay={0}>
          <a href='https://www.linkedin.com/in/aayush-agnihotri/' className='hover:opacity-60' rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size='2x' color='white' />
          </a>
        </Tooltip>
        <Tooltip content='Email' showArrow={true} placement='bottom' closeDelay={0}>
          <a href='mailto:aa2328@cornell.edu' className='hover:opacity-60' rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} size='2x' color='white' />
          </a>
        </Tooltip>
      </div>
    </div>
  )
}