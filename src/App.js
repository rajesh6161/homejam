import React from 'react';
import Main from './components/HeroSection/Main';
import Reviews from './components/HeroSection/Reviews/Reviews';
import Shows from './components/HeroSection/Shows/Shows';

function App() {
  return (
    <div className="App">
      <Main />
      <Shows />
      <Reviews />
    </div>
  );
}

export default App;
