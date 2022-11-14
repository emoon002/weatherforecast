import React from 'react';
import {useState} from 'react';
import './App.css';
import WeatherCard from './WeatherCard';
import SearchIcon from './search.svg';

const API_URL = 'https://weatherdbi.herokuapp.com/data/weather/';

const App = () => {

  let [weather, setWeather] = useState([]);
  let [searchLocation, setSearchLocation] = useState('');
  let {region, currentConditions, next_days} = weather;

  const searchWeather = async (location) => {
    const response = await fetch(`${API_URL}${location}`);
    const data = await response.json();
    setWeather(data);
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
        searchWeather(searchLocation);
    }
  };

  return (
    <div className="App">
      <div className='title-container'><h1 className='title'>Weather Forecast</h1></div>
      <div className="search">
        <input onChange={(e) => setSearchLocation(e.target.value)} onKeyDown={handleKeyDown} type='text' placeholder='Enter a location...' value={searchLocation} />
        <img onClick={() => searchWeather(searchLocation)} src={SearchIcon} alt='search' />
      </div>
        <WeatherCard region={region} currentConditions={currentConditions} next_days={next_days} searchLocation={searchLocation} />
        <footer className='footer'>&copy; Copyright 2022 Evan Moon</footer>
    </div>
  );
}

export default App;
