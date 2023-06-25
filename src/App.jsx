import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Navbar from './components/Navbar'
import TodayWeather from './components/TodayWeather'
import ForecastWeek from './components/ForecastWeek'

import FetchWeather from './data/FetchWeather';

import { useState, useEffect } from 'react';
function App() {
  const [weather, setWeather] = useState({})
  const [location, setLocation] = useState("Hong Kong");

  useEffect(() => {
    let ignore = false;

    FetchWeather(location).then(result => {
      if (!ignore) {
        setWeather(result);
      }
    });

    return () => {
      ignore = true;
    }
  }, [location]);

  const handleLocationChange = (location) => {
    setLocation(location);
  } 

  return (
    <div className='App'>
      <Navbar handleLocationChange={handleLocationChange} />
      <TodayWeather weather={weather}/>
      <ForecastWeek weather={weather} />
    </div>
  )
}

export default App
