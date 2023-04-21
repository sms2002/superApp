import React, { useEffect, useState } from 'react'
import './Weather.css'
import Cloud from '../../assets/Cloud.png'
import Temperature from '../../assets/Temperture.png'
import Line from '../../assets/Line.png'
import Wind from '../../assets/Wind.png'
import Raindrop from '../../assets/Raindrop.png'
import axios from '../../axios'
import { API_KEY_WEATHER } from '../../constants'
function Weather() {
  const [localDate, setLocalDate] = useState('')
  const [localTime, setLocalTime] = useState('')
  const [weatherCondition, setWeatherCondition] = useState('')
  const [temperature, setTemperature] = useState('')
  const [pressure, setPressure] = useState('')
  const [windSpeed, setWindSpeed] = useState('')
  const [humidity, setHumidity] = useState('')
  useEffect(() => {
   axios.get(`current.json?key=${API_KEY_WEATHER}&q=india`).then((response)=>{
    
    const localdate=response.data.location.localtime.slice(0,10)
    const localtime=response.data.location.localtime.slice(10)
    const weathercondition=response.data.current.condition.text
    const temperature=response.data.current.temp_c
    const pressure=response.data.current.pressure_mb
    const windspeed=response.data.current.wind_kph
    const humidity=response.data.current.humidity

    setLocalDate(localdate)
    setLocalTime(localtime)
    setWeatherCondition(weathercondition)
    setTemperature(temperature)
    setPressure(pressure)
    setWindSpeed(windspeed)
    setHumidity(humidity)
   })
  }, [])
  
  return (
    <div className="weatherContainer">
      <div className="weatherTopContainer">
          <h1 className="weatherDate">{localDate}</h1>
          <h1 className="weatherTime">{localTime}</h1>
      </div>
      <div className="weatherBottomContainer">
        <div className="weatherFirstSection">
        <img src={Cloud} alt="cloud" className="weatherCloud" />
        <h3 className="weatherCondition">{weatherCondition}</h3>
        </div>
        <div className="line1">
            <img src={Line} alt="Line1" />
        </div>
        <div className="weatherSecondSection">
        <h1 className="weatherTemp">{`${temperature}°C`}</h1>
        <div className="tempPressure">
        <img src={Temperature} alt="cloud" className="weatherTemperature" />
        <h3 className="pressureText">{`${pressure}`} mbar<br/>Pressure</h3>
        </div>
        </div>  
        <div className="line1">
            <img src={Line} alt="Line1" />
        </div>
        <div className="thirdSection">
          <div className="thirdTop">
            <div className="topLeft">
            <img src={Wind} alt="wind" className="windImg" />
            </div>
            <div className="topRight">
              <h3 className="windSpeed">{`${windSpeed}`} km/h</h3>
              <h3 className="windTitle">Wind</h3>
            </div>
          </div>
          <div className="thirdBottom">
            <div className="bottomleft">
              <img src={Raindrop} alt="raindrop" className="raindropImg" />
            </div>
            <div className="bottomRight">
            <h3 className="windSpeed">{`${humidity}%`}</h3>
              <h3 className="windTitle">Humidity</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
