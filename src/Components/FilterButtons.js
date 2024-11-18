// components/FilterButtons.jsx
import React from 'react';

const FilterButtons = ({ onFilter }) => {
  const filters = ['Specialties', 'Reviews', 'Availability'];

  return (
    <div style={{ textAlign: 'center', margin: '1rem 0' }}>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilter(filter)}
          style={{
            margin: '0 0.5rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#6200ea',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
