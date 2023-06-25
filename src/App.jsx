import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Navbar from './components/Navbar'
import TodayWeather from './components/TodayWeather'
import ForecastWeek from './components/ForecastWeek'

function App() {

  return (
    <div className='App'>
      <Navbar />
      <TodayWeather />
      <ForecastWeek />
    </div>
  )
}

export default App
