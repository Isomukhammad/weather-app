import clearDay from './assets/clear_day.jpg';
import clearNight from './assets/clear_night.jpg';
import snowyDay from './assets/snowy_day.jpg'
import snowyNight from './assets/snowy_night.jpg'
import rainyDay from './assets/rainy_day.jpg'
import rainyNight from './assets/rainy_night.jpg'
import cloudyDay from './assets/cloudy_day.jpg'
import cloudyNight from './assets/cloudy_night.jpg'
import foggyDay from './assets/foggy_day.jpg'
import foggyNight from './assets/foggy_night.jpg'
import defaultImg from './assets/default.jpg'

export const weatherCondition = (timezone, text, time) => {
    const hour = new Date(time * 1000).toLocaleTimeString(navigator.language, {timeZone: `${timezone}`, hour: '2-digit'});

    text = text.toLowerCase();

    if(text.includes('sunny') || text.includes('clear')) {
        if(hour > 6 && hour < 18){
            return clearDay
        } else {
            return clearNight
        }
    } 

    else if(text.includes('cloudy' || text.includes('overcast'))) {
        if(hour > 6 && hour < 18){
            return cloudyDay
        } return cloudyNight
    } 

    else if(text.includes('rain')) {
        if(hour > 6 && hour < 18){
            return rainyDay
        } return rainyNight
    } 

    else if(text.includes('snow') || text.includes('blizzard')) {
        if(hour > 6 && hour < 18){
            return snowyDay
        } return snowyNight
    } 

    else if(text.includes('fog')) {
        if(hour > 6 && hour < 18){
            return foggyDay
        } return foggyNight
    } else {
        return defaultImg
    }
}