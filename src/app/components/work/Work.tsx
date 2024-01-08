import WorkAccordion from './WorkAccordion'

export default function Work() {
  return (
    <div className='flex flex-col py-10'>
      <div className='flex flex-col items-center mb-5'>
        <h1 className='text-4xl font-bold'>Work Experience</h1>
      </div>

      <div className='container w-4/5 mx-auto'>
        <WorkAccordion />
      </div>
    </div>
  )
}