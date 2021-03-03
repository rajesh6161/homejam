import React from 'react';
import Logo from '../../assets/homejam.png';

const MobileNav = () => {
  return (
    <div className="container mobileNav pt-2">
      <div className="left_box">
        <img src={Logo} alt="logo image" />
      </div>
      <div className="right_box">
        <ul>
          <li>
            <i className="bi bi-search"></i>
          </li>
          <li>
            <i className="bi bi-person-bounding-box pl-4"></i>
          </li>
          <li>
            <i style={{ fontSize: 25 }} className="bi bi-list pl-4"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
