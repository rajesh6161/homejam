import React from 'react';
import MobileNav from '../Navbar/MobileNav';
import Navbar from '../Navbar/Navbar';
import Circle from './Circles/Circle';
import Circular from './Circular';
import './main.css';
import Shows from './Shows/Shows';

const Main = () => {
  return (
    <div className="heroSection">
      <div className="overlay"></div>
      <Navbar />
      <MobileNav />
      <div className="container home">
        <h1 className="title">Cari Cari</h1>
        <p className="sub">
          Live from their sofa to yours. Get closer to your favorite artists,
          and never miss out.
        </p>

        <div className="circleContainer">
          <Circle />
        </div>
      </div>
    </div>
  );
};

export default Main;
