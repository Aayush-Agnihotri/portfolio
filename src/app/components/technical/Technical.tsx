import { TechnicalData } from "./TechnicalData"
import { TechnicalCard } from "./TechnicalCard"

export default function Technical() {
  return (
    <div id='experience' className='flex flex-col py-10 gap-5 bg-gray-50 text-center'>
      <div className='flex flex-col items-center mb-5'>
        <h1 className='text-4xl font-bold'>Technical Experience</h1>
      </div>

      <div className='w-4/5 mx-auto flex flex-wrap gap-14 justify-center'>
        {TechnicalData.map((data, _) => (
          <TechnicalCard
            key={data.type}
            {...data}
          />
        ))}
      </div>
    </div>
  )
}