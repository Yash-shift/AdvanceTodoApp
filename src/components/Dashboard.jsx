

import React, { useState } from "react";
import TaskInput from "./TaskInput.jsx";
import TaskList from "./TaskList.jsx";
import WeatherWidget from "./WeatherWidget.jsx";
import WeatherSearch from "./WeatherSearch.jsx";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";

const Dashboard = () => {
  const [locations, setLocations] = useState(["London"]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSearch = (query) => {
    if (!locations.includes(query)) {
      setLocations([...locations, query]);
    }
  };

  const handleRemoveLocation = (locationToRemove) => {
    setLocations(locations.filter((loc) => loc !== locationToRemove));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onMenuToggle={toggleSidebar} />

      <div className="flex flex-col md:flex-row">
        {/* Sidebar for mobile and desktop */}
        <div className={`
          fixed top-0 left-0 w-64 h-full z-40 transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0 md:block
        `}>
          <Sidebar />
        </div>

        {/* Sidebar overlay for mobile */}
        {isSidebarOpen && (
          <div 
            onClick={toggleSidebar} 
            className="md:hidden fixed inset-0 bg-black opacity-50 z-30"
          />
        )}

        {/* Main Content Area */}
        <main className="flex-1 p-4 md:p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 space-y-6">
              <TaskInput />
              <TaskList />
            </div>
            
            <div className="space-y-6">
              <WeatherSearch onSearch={handleSearch} />
              {locations.map((location) => (
                <div key={location} className="relative">
                  <WeatherWidget location={location} />
                  <button
                    onClick={() => handleRemoveLocation(location)}
                    className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 rounded-full hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
