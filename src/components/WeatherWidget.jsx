import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/actions/weatherActions';

const WeatherWidget = ({ location }) => {
  const dispatch = useDispatch();
  const weather = useSelector(state => state.weather) || { loading: false, error: null, data: null };

  useEffect(() => {
    if (location) {
      dispatch(fetchWeather(location));
    }
  }, [dispatch, location]);

  if (weather.loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
        <div className="flex items-center justify-center p-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      </div>
    );
  }

  if (weather.error) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
        <div className="p-4 bg-red-100 text-red-600 rounded-lg">
          Error: {weather.error}
        </div>
      </div>
    );
  }

  if (!weather.data) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
        <div className="text-gray-500">No weather data available</div>
      </div>
    );
  }

  const { current, location: weatherLocation } = weather.data;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow relative">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {weatherLocation.name}, {weatherLocation.country}
        </h3>
        <img 
          src={current.condition.icon} 
          alt={current.condition.text}
          className="w-16 h-16"
        />
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-4xl font-bold text-blue-600">{Math.round(current.temp_c)}°C</p>
          <p className="text-gray-600 capitalize">{current.condition.text}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
          <div className="space-y-2">
            <p className="text-gray-500">Feels like</p>
            <p className="text-lg font-semibold">{Math.round(current.feelslike_c)}°C</p>
          </div>
          <div className="space-y-2">
            <p className="text-gray-500">Humidity</p>
            <p className="text-lg font-semibold">{current.humidity}%</p>
          </div>
          <div className="space-y-2">
            <p className="text-gray-500">Wind</p>
            <p className="text-lg font-semibold">{current.wind_kph} km/h</p>
          </div>
          <div className="space-y-2">
            <p className="text-gray-500">Pressure</p>
            <p className="text-lg font-semibold">{current.pressure} hPa</p>
          </div>
        </div>

        {current.air_quality && (
          <div className="pt-4 border-t border-gray-100">
            <p className="text-gray-500 mb-2">Air Quality</p>
            <div className="flex items-center space-x-2">
              <div className={`px-2 py-1 rounded-full text-sm ${
                current.air_quality["us-epa-index"] <= 2 ? 'bg-green-100 text-green-700' :
                current.air_quality["us-epa-index"] <= 4 ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {current.air_quality["us-epa-index"] <= 2 ? 'Good' :
                 current.air_quality["us-epa-index"] <= 4 ? 'Moderate' : 'Poor'}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherWidget;
