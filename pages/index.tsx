import type { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { HighlightsComponent } from '../components/HighlightsComponent'
import { LargeWeatherComponent } from '../components/LargeWeatherComponent'
import { SearchComponent } from '../components/SearchComponent'
import { TopBarComponent } from '../components/TopBarComponent'
import { WeeklyForecastComponent } from '../components/WeeklyForecastComponent'
import { LocationResult, RequestError } from '../types/Weather'
import smp from "../sampleData/sampleWeatherRes.json";

const Home: NextPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {setShowMenu(!showMenu)};
  const [currentLocData, setCurrentLocData] = useState<LocationResult>(smp);
  const [locationId, setLocationId] = useState<number>(44418); //default london
  const getLocationData =  useCallback( async () => {
    const locData = await fetch("/api/locWeather?woe=" + locationId);
    if(locData.ok){
      setCurrentLocData(await locData.json());
    }
  },[locationId]
  )
  useEffect(()=>{
    getLocationData();
  }, [getLocationData])
  
  const setSelectedLocation = (location: number) => {
    setLocationId(location);
    toggleMenu();
  }
  if(!currentLocData){
    return (<p>An error occurred retrieving data</p>);
  }
  return (
    <>
      <TopBarComponent toggleMenu={toggleMenu} />
      <SearchComponent setSelectedLoc={setSelectedLocation} show={showMenu} closeMenu={toggleMenu} />
      {showMenu ? <div className='w-screen h-screen fixed backdrop-blur-sm z-10'></div> : null}
      <div className='flex flex-col md:flex-row items-center w-full h-screen'>

        <div className='h-full w-screen md:w-1/2'>
          <LargeWeatherComponent today={currentLocData.consolidated_weather[0]} location={currentLocData.title} />
        </div>

        <div className='flex-row w-screen'>
          <div className='flex flex-flow flex-wrap'>
            {currentLocData.consolidated_weather.map((item, idx )=> 
            <WeeklyForecastComponent key={idx} wDate={item.applicable_date}
            minTemp={item.min_temp} theTemp={item.the_temp} weatherAbbr={item.weather_state_abbr} />)}
          </div>

          <div className='col-start-2 col-span-2 p-5'>
            <HighlightsComponent forecast={currentLocData.consolidated_weather[0]} />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Home
