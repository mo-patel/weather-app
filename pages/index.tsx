import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { HighlightsComponent } from '../components/HighlightsComponent'
import { LargeWeatherComponent } from '../components/LargeWeatherComponent'
import { SearchComponent } from '../components/SearchComponent'
import { TopBarComponent } from '../components/TopBarComponent'
import { WeeklyForecastComponent } from '../components/WeeklyForecastComponent'
import { LocationResult, RequestError } from '../types/Weather'

const Home: NextPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {setShowMenu(!showMenu)};
  const [currentLocData, setCurrentLocData] = useState<LocationResult>();
  const [locationId, setLocationId] = useState<number>(44418); //default london
  useEffect(()=>{
    //getLocationData();
  }, [])
  const getLocationData = async () => {
    const locData = await fetch("/api/locWeather?woe=" + locationId);
    if(locData.ok){
      setCurrentLocData(await locData.json());
    }
  }
  const setSelectedLocation = (location: number) => {
    setLocationId(location);
    toggleMenu();
  }
  return (
    <>
    <TopBarComponent toggleMenu={toggleMenu} />
    <SearchComponent setSelectedLoc={setSelectedLocation} show={showMenu} closeMenu={toggleMenu} />
    {showMenu ? <div className='w-screen h-screen fixed backdrop-blur-sm z-10'></div> : null}
    <div className='flex flex-col md:flex-row items-center w-full h-screen'>
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
    </>
  )
}

export default Home
