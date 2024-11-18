// components/BraiderCard.jsx
import React from 'react';

const BraiderCard = ({ braider }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      margin: '1rem',
    }}>
      <img
        src={braider.image}
        alt={braider.name}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div style={{ padding: '1rem' }}>
        <h3>{braider.name}</h3>
        <p>⭐ {braider.rating} ({braider.reviews} reviews)</p>
        <button style={{
          backgroundColor: '#6200ea',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}>
          View Profile
        </button>
      </div>
    </div>
  );
};

export default BraiderCard;
