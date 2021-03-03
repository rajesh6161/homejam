import React from 'react';
import Reviews from '../Reviews/Reviews';
import Card from './Card';
import './shows.css';

const Shows = () => {
  return (
    <div className="container showContainer">
      <div className="showHead">
        <h2>Upcoming Shows</h2>
        <p id="gold">
          <a href="#">View All</a>
        </p>
      </div>
      <div className="cardContainer flex-r">
        {[1, 2, 3, 4].map((el) => (
          <Card />
        ))}
      </div>
    </div>
  );
};

export default Shows;
