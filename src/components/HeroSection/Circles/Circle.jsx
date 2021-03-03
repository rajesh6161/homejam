import React from 'react';
import './circle.css';

const Circle = () => {
  return (
    <div className="flex-r mt-5">
      <div className="progress-circle p10">
        <div className="content">
          <i className="bi bi-suit-heart"></i>
          <h1>0</h1>
          <p>Label</p>
        </div>
        <div className="left-half-clipper">
          <div className="first50-bar"></div>
          <div className="value-bar"></div>
        </div>
      </div>
      <div class="progress-circle p33">
        <div className="content">
          <i className="bi bi-bookmark-star"></i>
          <h1>0</h1>
          <p>Label</p>
        </div>
        <div class="left-half-clipper">
          <div class="first50-bar"></div>
          <div class="value-bar"></div>
        </div>
      </div>
      <div class="progress-circle p33">
        <div className="content">
          <i className="bi bi-bookmark-star"></i>
          <h1>0</h1>
          <p>Label</p>
        </div>
        <div class="left-half-clipper">
          <div class="first50-bar"></div>
          <div class="value-bar"></div>
        </div>
      </div>
      {/* 
      <div className="c"></div>
      <div className="cc"></div> */}
    </div>
  );
};

export default Circle;
