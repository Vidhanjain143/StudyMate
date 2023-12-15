import React, { useState } from 'react';
import './HomePage.css';
import Navbar from './Navbar';
import MainPageImage from '../images/mainpage.jpg'
import LandingPage from './LandingPage';
function HomePage() {
  const [menuVisible, setMenuVisible] = useState(false);

  
  
  return (
    <>
    <div className="home-page">
    <img src={MainPageImage} className='smth' alt="Main Page" />
      <LandingPage/>
    </div>
    </>
  );
}

export default HomePage;
