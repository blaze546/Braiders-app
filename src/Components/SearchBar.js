// components/SearchBar.jsx
import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search for braiders..."
      onChange={(e) => onSearch(e.target.value)}
      style={{
        width: '80%',
        padding: '0.5rem',
        borderRadius: '5px',
        margin: '1rem auto',
        display: 'block',
      }}
    />
  );
};

export default SearchBar;
