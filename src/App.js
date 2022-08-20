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

  const url = `http://api.weatherapi.com/v1/current.json?key=e714431a7a124eb5b5194732222008&q=${location}`

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
    const wallpaper = weatherCondition(condition.location.tz_id, condition.current.condition.text, condition.location.localtime_epoch)
    setImage(wallpaper);

    setWeather( prevValues => {
      return { 
        ...prevValues,
        name: condition.location.name,
        temp: condition.current.temp_c,
        humidity: condition.current.humidity,
        speed: condition.current.wind_kph,
        description: condition.current.condition.text,
        clouds: condition.current.cloud,
        icon: condition.current.condition.icon,
        time: condition.location.localtime_epoch,
        timezone: condition.location.tz_id,
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
