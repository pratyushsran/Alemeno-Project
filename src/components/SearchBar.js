import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search courses by name or instructor..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
    />
  );
};

export default SearchBar;
