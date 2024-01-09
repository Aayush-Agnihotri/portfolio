"use client"

import Link from 'next/link'
import Footer from './components/Footer'

export default function NotFound() {
  return (
    <div>
      <div className='h-screen container mx-auto my-auto flex flex-col items-center justify-center gap-10 -mt-20'>
        <h1 className='font-bold text-5xl'>Page Not Found</h1>
        <p className='text-gray-500'>The page you are looking for does not exist.</p>
        <Link className='mx-auto lg:mx-0 hover:opacity-60' href="/">
          <button className="px-10 mt-8 py-2 bg-blue-500 text-gray-50 rounded-md text-lg flex flex-row items-center font-bold hover:opacity-90">
            Go Home
          </button>
        </Link>
      </div>
      

      <div className='absolute bottom-0 left-0 right-0'>
        <Footer />
      </div>
    </div>
  )
}
