import React from 'react';
import './review.css';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  return (
    <div className="container reviewContainer">
      <div className="showHead">
        <h2>Reviews</h2>
        <div className="pagination">
          <p>
            1/<span style={{ color: 'rgb(116, 116, 116)' }}>12</span>
          </p>

          <div className="icons">
            <i className="bi bi-arrow-left"></i>
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>
      <div className="cardy flex-r">
        {[1, 2, 3].map((el) => (
          <ReviewCard />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
