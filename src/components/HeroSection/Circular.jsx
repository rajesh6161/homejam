import React from 'react';

const Circular = () => {
  return (
    <div className="box">
      <div className="percent">
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle cx="70" cy="70" r="70"></circle>
        </svg>
        <div className="number">
          <h2>
            87<span>%</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Circular;
