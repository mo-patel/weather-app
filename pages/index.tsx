import type { NextPage } from 'next'
import { HighlightsComponent } from '../components/HighlightsComponent'
import { LargeWeatherComponent } from '../components/LargeWeatherComponent'
import { TopBarComponent } from '../components/TopBarComponent'
import { WeeklyForecastComponent } from '../components/WeeklyForecastComponent'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col md:flex-row items-center w-full h-screen'>
      <TopBarComponent />
      <div className='h-full w-screen md:w-1/2'>
        <LargeWeatherComponent />
      </div>
      <div className='flex-row w-screen'>
        <div className='flex flex-flow flex-wrap'>
          {[0,1,2,3,4].map((item, idx )=> <WeeklyForecastComponent key={idx} />)}
        </div>
        <div className='col-start-2 col-span-2 p-5'>
          <HighlightsComponent />
        </div>
      </div>
    </div>
  )
}

export default Home
