import React, { useState } from 'react';
import TaskInput from './TaskInput.jsx';
import TaskList from './TaskList.jsx';
import WeatherWidget from './WeatherWidget.jsx';
import WeatherSearch from './WeatherSearch.jsx';

const Dashboard = () => {
  const [locations, setLocations] = useState(['London']);

  const handleSearch = (query) => {
    if (!locations.includes(query)) {
      setLocations([...locations, query]);
    }
  };

  const handleRemoveLocation = (locationToRemove) => {
    setLocations(locations.filter(loc => loc !== locationToRemove));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <TaskInput />
          <TaskList />
        </div>
        <div className="space-y-6">
          <WeatherSearch onSearch={handleSearch} />
          {locations.map(location => (
            <div key={location} className="relative">
              <WeatherWidget 
                location={location} 
              />
              <button
                onClick={() => handleRemoveLocation(location)}
                className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 rounded-full hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;