import type { NextPage } from 'next'
import { HighlightsComponent } from '../components/HighlightsComponent'
import { LargeWeatherComponent } from '../components/LargeWeatherComponent'
import { WeeklyForecastComponent } from '../components/WeeklyForecastComponent'

const Home: NextPage = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-2 items-center justify-center w-full h-screen'>
      <div className='row-span-2 h-full '>
        <LargeWeatherComponent />
      </div>
      <div className='grid md:grid-cols-5 sm:grid-cols-3 col-start-2 col-span-2 w-full h-1/4'>
        {[0,1,2,3,4].map((item, idx )=> <WeeklyForecastComponent key={idx} />)}
      </div>
      <div className='col-start-2 col-span-2 '>
        <HighlightsComponent />
      </div>
      
    </div>
  )
}

export default Home
