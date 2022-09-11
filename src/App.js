import { useEffect, useState } from "react";

import Main from "./components/main/main.component";
import Sidebar from "./components/sidebar/sidebar.component";

import { weatherCondition } from "./WeatherCondition";

import clearDay from './assets/clear_day.jpg'

import './App.css'

const App = () => {
  const [image, setImage] = useState(clearDay)
  const [location, setLocation] = useState('Tashkent');
  const [input, setInput] = useState('');
  const [weather, setWeather] = useState({
    name: '',
    temp: null,
    humidity: null,
    speed: null,
    description: '',
    clouds: null,
    icon: '',
    time: null,
    timezone: '',
  })

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=165cf08ace071b07067444e3552f8b7a`

  useEffect(() => {
    try{
      fetch(url)
      .then(response => response.json())
      .then(answer => {
        if(answer.error) {
          alert('Wrong region');
        } else {
          weatherConditions(answer);
        }
        setInput('');
      })
    } catch {
      alert('Error!');
    }
  }, [location])

  const weatherConditions = (condition) => {
    console.log(condition)
    const wallpaper = weatherCondition(condition.weather[0].description, condition.dt, condition.sys.sunrise, condition.sys.sunset)
    setImage(wallpaper);
    setWeather( prevValues => {
      return { 
        ...prevValues,
        name: condition.name,
        temp: condition.main.temp,
        humidity: condition.main.humidity,
        speed: condition.wind.speed,
        description: condition.weather[0].description,
        clouds: condition.clouds.all,
        icon: condition.weather[0].icon,
        time: condition.dt,
      }
    })
  }

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(input === ''){
      alert('Input is empty');
      return;
    } 
    setLocation(input);
  }

  return(
     <div className="App" style = {{backgroundImage: `url(${image})`}}>
        <Main weather={weather}/>
        <Sidebar 
          handleChange = {handleChange} 
          handleSubmit = {handleSubmit} 
          input = {input} 
          setLocation = {setLocation} 
          weather = {weather}/>
     </div>
   )
}

export default App;
