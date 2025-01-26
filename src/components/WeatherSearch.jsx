import React, { useState } from 'react';

const WeatherSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search city..."
          className="flex-1 px-4 py-2 border bg-green-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-200 text-green-500 rounded-lg hover:bg-white hover:text-black focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default WeatherSearch;
