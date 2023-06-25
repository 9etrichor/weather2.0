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
  const [location, setLocation] = useState("");

  useEffect(() => {
    let ignore = false;

    FetchWeather().then(result => {
      if (!ignore) {
        setWeather(result);
      }
    });

    return () => {
      ignore = true;
    }
  }, []);
  

  return (
    <div className='App'>
      <Navbar location={location} setLocation={setLocation} />
      <TodayWeather weather={weather}/>
      <ForecastWeek weather={weather} />
    </div>
  )
}

export default App
