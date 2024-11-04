import React from 'react';
import './hojaDeEstilo/chargerts.css'; // Opcional, para añadir estilos

export default function Chargerts() {
  return (
    <div className="chargerts-container">
      {/* SVG inline */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="100"
        height="100"
        viewBox="0 0 630 540"
        className="loading-icon"
      >
        <circle
          r="100"
          cx="315"
          cy="270"
          fill="white"
          stroke="white"
          strokeWidth="10"
          strokeOpacity="1"
          strokeDasharray="0"
          strokeDashoffset="0"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <polygon
          points="310,95 554,389 97,385"
          fill="white"
          stroke="white"
          strokeWidth="10"
          strokeOpacity="1"
          strokeDasharray="0"
          strokeDashoffset="0"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <line
          x1="315"
          y1="370"
          x2="311"
          y2="100"
          stroke="white"
          strokeWidth="10"
          strokeOpacity="1"
          strokeDasharray="0"
          strokeDashoffset="0"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </svg>
      <p>Cargando...</p>
    </div>
  );
}
