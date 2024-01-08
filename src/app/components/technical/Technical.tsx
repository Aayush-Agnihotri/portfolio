import { TechnicalData } from "./TechnicalData"
import { TechnicalCard } from "./TechnicalCard"

export default function Technical() {
  return (
    <div id='experience' className='flex flex-col py-5 gap-5'>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-bold'>Technical Experience</h1>
      </div>

      <div className='container mx-auto flex flex-wrap gap-10 justify-center'>
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