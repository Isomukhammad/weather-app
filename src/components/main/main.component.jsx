import { useEffect, useState } from "react";

import './main.styles.css';

const Main = ({weather}) => {
    const {name, temp, description, icon, time, timezone} = weather;
    const [localeTime, setLocaleTime] = useState({
        hour: '',
        date: '',
    });

    useEffect(() => {
        if(weather.clouds !== null){ 
            const hour = new Date(time * 1000).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit'});
            const date = new Date(time * 1000).toLocaleDateString(
                'en-US',
                {weekday: 'long',
                day: '2-digit',
                month: 'short',
                year: '2-digit'
                }
            )
            setLocaleTime( prevValues => {
                return { 
                    ...prevValues,
                    hour: hour,
                    date: date
                }
            })
        }
    }, [weather])
    return(
        <div className="main-container">
            <div className="brand">the.weather</div>

            <div className="information">
                <h3 className="temperature">{Math.round(temp)}&#176;</h3>                

                <div className="region-name">
                    <h1 className = 'region-name-display'>{name}</h1>

                    <small>
                        <span className = 'time'>{localeTime.hour}</span>
                        -
                        <span className = 'date'>
                            {localeTime.date}
                        </span>
                    </small>
                </div>

                <div className ="weather">
                    <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="condition icon" />
                    <span className = 'condition'>{description.toUpperCase()}</span>
                </div>
            </div>
        </div>
    )
}

export default Main;