import searchIcon from '../../assets/icons/search.png'

import './sidebar.styles.css'

const Sidebar = ({handleSubmit, handleChange, input, setLocation, weather}) => {
    const {speed, humidity, clouds} = weather;

    return(
        <div className="sidebar">
            <form className = 'search' onSubmit={handleSubmit}>
                <input className = 'input'
                type="text"
                value = {input}
                onChange = {handleChange}
                placeholder = 'Another location'
                />

                <button type = 'submit' className = 'submit'>
                    <img src={searchIcon} alt="Search" height = '20px' width = '20px'/>
                </button>
            </form>

            <ul className = 'regions'>
                <li className = 'region' onClick = {() => setLocation('Tashkent')}>Tashkent</li>
                <li className = 'region' onClick = {() => setLocation('Samarkand')}>Samarkand</li>
                <li className = 'region' onClick = {() => setLocation('Bukhara')}>Bukhara</li>
                <li className = 'region' onClick = {() => setLocation('Khiva')}>Khiva</li>
            </ul>

            <ul className = 'details'>
                <h4>Weather Details</h4>
                <li>
                    <span>Cloudy</span>
                    <span className = 'cloud'>{clouds}%</span>
                </li>

                <li>
                    <span>Humidity</span>
                    <span className = 'humidity'>{humidity}%</span>
                </li>

                <li>
                    <span>Wind</span>
                    <span className = 'wind'>{Math.round(speed)}km/h</span>
                </li>

                <li>
                    <span>Rain</span>
                    <span className = 'rain'>0mm</span>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;