import type { NextPage } from 'next'
import { WeeklyForecastComponent } from '../components/WeeklyForecastComponent'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <h1 className='text-3xl'>Weather app</h1>
      <div className='flex flex-row w-full h-1/2'>
        {[0,1,2,3,4].map((item, idx )=> <WeeklyForecastComponent key={idx} />)}
      </div>
    </div>
  )
}

export default Home
