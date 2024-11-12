 import data from '../../data.json'
import SummaryItem from './SummaryItem'

function Summary() {
  return (
    <section className=' p-7 flex flex-col lg:basis-1/2 '>
        <h2 className='text-xl font-bold text-dGBlue mb-7'>Summary </h2>
        <div className='flex flex-col gap-4 mb-10'>
        {data.map(item => <SummaryItem key={item.category} category={item.category} score={item.score}/>)}
        </div>
        <button className='bg-dGBlue font-medium text-lg text-white py-4 rounded-full'>Continue</button>
    </section>
  )
}

export default Summary