import React, { useState } from 'react';
import Music from './music.jpg';

const Card = () => {
  const [icon, setIcon] = useState(true);

  return (
    <div className="cardx">
      <div id="cardFront">
        <div className="imageContainer">
          <img src={Music} alt="Music Image" />
        </div>
        <div className="cardContent">
          <div className="tag">Folk</div>
          <h3 className="pt-1">Benny Dayal</h3>
          <div className="info">
            <div>
              <a style={{ fontSize: 18 }} href="#">
                More Info
              </a>
              <i id="arrow" className="bi bi-arrow-right pl-3"></i>
            </div>
            <a
              href="#"
              onMouseEnter={() => setIcon(false)}
              onMouseLeave={() => setIcon(true)}
            >
              <i
                className={
                  icon ? 'bi bi-bookmark-star' : 'bi bi-bookmark-star-fill'
                }
              ></i>
            </a>
          </div>
        </div>
      </div>
      <div className="cardBack"></div>
    </div>
  );
};

export default Card;
