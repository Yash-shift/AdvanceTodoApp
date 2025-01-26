import { fetchWeatherData } from '../../services/weatherService';

export const fetchWeather = (location) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_WEATHER_REQUEST' });

    try {
      const API_KEY = 'e3521590d9ca06c32b29289f56eff069';
      
      // First, get coordinates from location name
      const geoResponse = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`
      );

      if (!geoResponse.ok) throw new Error('Location not found');
      
      const [geoData] = await geoResponse.json();
      if (!geoData) throw new Error('Location not found');

      // Then fetch weather data using coordinates
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${geoData.lat}&lon=${geoData.lon}&appid=${API_KEY}&units=metric`
      );

      if (!weatherResponse.ok) throw new Error('Weather data fetch failed');

      const weatherData = await weatherResponse.json();

      dispatch({
        type: 'FETCH_WEATHER_SUCCESS',
        payload: {
          location: {
            name: geoData.name,
            country: geoData.country
          },
          current: {
            temp_c: weatherData.main.temp,
            feelslike_c: weatherData.main.feels_like,
            humidity: weatherData.main.humidity,
            wind_kph: (weatherData.wind.speed * 3.6).toFixed(1), // Convert m/s to km/h
            condition: {
              text: weatherData.weather[0].description,
              icon: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
            },
            pressure: weatherData.main.pressure,
            uv: weatherData.uvi || 0
          }
        }
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_WEATHER_FAILURE',
        payload: error.message
      });
    }
  };
};
