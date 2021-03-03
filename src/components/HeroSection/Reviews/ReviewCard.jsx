import React from 'react';
import Avatar from './avatar.jpg';
import Flag from './flag.png';

const ReviewCard = () => {
  return (
    <div className="reviewCard">
      <div className="front">
        <div className="front_head">
          <img id="avatar" src={Avatar} alt="Avatar Image" />
          <div className="profile">
            <h5>Hellen Jummy</h5>
            <div className="flex-r">
              <img id="flag" src={Flag} alt="" />
              <p className="p pl-2">PALO ALTO, CA</p>
            </div>
          </div>
        </div>
        <div className="front_info pt-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
          dolore vel modi similique est tempore voluptates eos excepturi
          molestiae officia!
        </div>
      </div>
      <div className="back"></div>
    </div>
  );
};

export default ReviewCard;
