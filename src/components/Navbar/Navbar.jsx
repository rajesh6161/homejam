import React from 'react';
import './nav.css';
import Logo from '../../assets/homejam.png';

const Navbar = () => {
  return (
    <div className="container navbar">
      <div className="leftBox">
        <img src={Logo} alt="" srcset="" />
      </div>
      <div className="rightBox">
        <ul>
          <li>
            <a href="#">
              <i className="bi bi-search"></i>Search
            </a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">
              Account<i className="bi bi-person-bounding-box"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
