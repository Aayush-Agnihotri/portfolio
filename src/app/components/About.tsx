export default function About() {
  return (
    <div id='about' className='bg-gray-50 py-5'>
      <div className='w-4/5 mx-auto flex flex-col gap-5 items-center'>
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl font-bold'>About Me</h1>
          <div className='w-3/5 mt-5'>
            <p className='text-xl text-gray-500'>I am currently a student at <span className='font-bold'>Cornell University</span>, majoring in Computer Science with a minor in Business. I have experience in software engineering, primarily in web and full stack development.</p>
            <br></br>
            <p className='text-xl text-gray-500'>I aim to leverage technology and data to build useful and innovative products.</p>
            <br></br>
            <p className='text-xl text-gray-500'>Aside from school and programming, I enjoy working out at the gym 🏋️, listening to music 🎵, or playing soccer ⚽.</p>
          </div>
        </div>
      </div>
    </div>
  )
}