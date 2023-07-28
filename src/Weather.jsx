import React, { useState } from 'react';

const Weather = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    const fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`)
            .then(response => response.json())
            .then(data => setWeather(data.main));
    }

    return (
        <div>
            <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name..." 
            />
            <button onClick={fetchData}>Fetch Weather</button>

            {weather && (
                <div>
                    <h2>{city}</h2>
                    <h3>{weather.temp}°C</h3>
                    <p>Humidity: {weather.humidity}%</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
