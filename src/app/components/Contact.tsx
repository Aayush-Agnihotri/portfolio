import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Tooltip } from "@nextui-org/react";
import { faEnvelope, faCalendarDays, faArrowUpRightFromSquare, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  return (
    <div id='contact' className='bg-gray-50 py-5'>
      <div className='w-4/5 mx-auto flex flex-col gap-5 items-center'>
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl font-bold'>Contact Me</h1>
          <p className='text-xl font-semibold text-gray-500'>Feel free to shoot me an email or schedule a coffee chat with the Calendly link below.</p>
        </div>

        <div className='container mx-auto flex justify-center gap-5 flex-wrap lg:gap-20'>
          <div className='flex flex-col gap-5 justify-center'>
            <Tooltip content='Email' showArrow={true} placement='left' closeDelay={0}>
              <a href='mailto:aa2328@cornell.edu' className='hover:opacity-60 flex items-center' rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} size='2x' />&nbsp; aa2328@cornell.edu &nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2xs' />
              </a>
            </Tooltip>
            <Tooltip content='Calendly' showArrow={true} placement='left' closeDelay={0}>
              <a href='https://calendly.com/aayush-agnihotri' className='hover:opacity-60 flex items-center' rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faCalendarDays} size='2x' />&nbsp; calendly.com/aayush-agnihotri &nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2xs' />
              </a>
            </Tooltip>
            <Tooltip content='LinkedIn' showArrow={true} placement='left' closeDelay={0}>
              <a href='https://www.linkedin.com/in/aayush-agnihotri/' className='hover:opacity-60 flex items-center' rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size='2x' />&nbsp; linkedin.com/in/aayush-agnihotri &nbsp;<FontAwesomeIcon icon={faArrowUpRightFromSquare} size='2xs' />
              </a>
            </Tooltip>
          </div>

          <div className='w-96'>
            <form className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white">
              <label className="text-gray-500 font-light mt-2">Full name<span className="text-red-500">*</span></label>
              <input type="text" name="name" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-gray-500" />

              <label  className="text-gray-500 font-light mt-4">Email<span className="text-red-500">*</span></label>
              <input type="email" name="email" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-gray-500" />

              <label  className="text-gray-500 font-light mt-4">Message<span className="text-red-500">*</span></label>
              <textarea name="message" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-blue-500 font-light text-gray-500"></textarea>
              <div className="mx-auto flex flex-row items-center justify-start">
                <button className="px-10 mt-8 py-2 bg-blue-500 text-gray-50 rounded-md text-lg flex flex-row items-center font-bold hover:opacity-90">
                  Send &nbsp;<FontAwesomeIcon icon={faPaperPlane} size='1x' />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}