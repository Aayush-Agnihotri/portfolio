"use client"

import { Popover, Transition } from "@headlessui/react"
import { Fragment } from "react"
import Image from "next/image"

export default function Navbar() {
  return (
    <Popover className='container mx-auto absolute left-0 right-0 flex items-center px-6 py-2 h-24 sm:text-center'>
      <div>
        <a href='/'>
          <div className='flex items-center gap-5'>
            <Image
              src="/images/logo-light.png"
              alt="Aayush Agnihotri Logo"
              width={35}
              height={35}
            />
            <h1 className='font-bold text-2xl text-blue-500 text-center md:block sm:hidden'>Aayush Agnihotri</h1>
          </div>
        </a>
      </div>
      <div className='grow'>
        <div className='hidden sm:flex items-center justify-end gap-7'>
          <a className='hover:opacity-60 font-medium' href='#about'>About</a>
          <a className='hover:opacity-60 font-medium' href='#projects'>Projects</a>
          <a className='hover:opacity-60 font-medium' href='#experience'>Experience</a>
          <a className='hover:opacity-60 font-medium' href='#contact'>Contact</a>
          <a className='hover:opacity-60 font-medium' href='/documents/Aayush Agnihotri Resume.pdf' rel="noopener noreferrer" target="_blank">Resume</a>
        </div>
      </div>

      <div className='flex grow items-center justify-end sm:hidden'>
        <Popover.Button className={'inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500'}>
          <span className='sr-only'>Open menu</span>
          <svg className={'h-6 w-6'} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </Popover.Button>
      </div>

      <Popover.Overlay className={'sm:hidden fixed inset-0 bg-black opacity-30'} />
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className={'absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'}>
          <div className={'rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50'}>
            <div className={'px-5 pt-5 pb-6'}>
              <div className={'flex items-center justify-between'}>
                <h1 className={'font-bold'}>Aayush Agnihotri</h1>
                <div className={'-mr-2'}>
                  <Popover.Button className={'inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500'}>
                    <span className='sr-only'>Close menu</span>
                    <svg className={'h-6 w-6'} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                    </svg>
                  </Popover.Button>
                </div>
              </div>
              <div className={'mt-6'}>
                <nav className={'grid gap-y-8'}>
                  <a className={'hover:opacity-60'} href='#about'><Popover.Button>About</Popover.Button></a>
                  <a className={'hover:opacity-60'} href='#projects'><Popover.Button>Projects</Popover.Button></a>
                  <a className={'hover:opacity-60'} href='#experience'><Popover.Button>Experience</Popover.Button></a>
                  <a className={'hover:opacity-60'} href='#contact'><Popover.Button>Contact</Popover.Button></a>
                  <a className={'hover:opacity-60'} href='/documents/Aayush Agnihotri Resume.pdf' rel="noopener noreferrer" target="_blank">Resume</a>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
