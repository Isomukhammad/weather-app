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

export const weatherCondition = (text, time, sunrise, sunset) => {
    text = text.toLowerCase();

    if(text.includes('clear')) {
        if(time > sunrise && time < sunset){
            return clearDay
        } else {
            return clearNight
        }
    } 

    else if(text.includes('clouds' || text.includes('overcast'))) {
        if(time > sunrise && time < sunset){
            return cloudyDay
        } return cloudyNight
    } 

    else if(text.includes('rain')) {
        if(time > sunrise && time < sunset){
            return rainyDay
        } return rainyNight
    } 

    else if(text.includes('snow') || text.includes('blizzard')) {
        if(time > sunrise && time < sunset){
            return snowyDay
        } return snowyNight
    } 

    else if(text.includes('fog')) {
        if(time > sunrise && time < sunset){
            return foggyDay
        } return foggyNight
    } else {
        return defaultImg
    }
}