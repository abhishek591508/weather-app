import React, { useEffect, useState } from 'react'
import SearchBox from "./SearchBox"
import InfoBoxCard from './InfoBoxCard'
// import InfoBoxCard from "./InfoBoxCard"
import './weatherApp.css'

const WeatherApp = () => {
    const [weatherInfo, setWeatherInfo]= useState({
            city : "Goa",
            feels:39,
            humidity:68,
            t_max: 32,
            t_min: 32,
            temp: 32,
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

  return (
    <div className='WeatherAppClass'>
     <h2>Search for the weather </h2>
      <SearchBox UpdateInfo = {updateInfo}/>
      <InfoBoxCard info ={weatherInfo}/>
    </div>
  )
}

export default WeatherApp
