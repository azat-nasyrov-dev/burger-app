import React from 'react';
import './Logo.css';
import burgerLogo from '../../assets/images/burger_logo.png';

const Logo = () => (
  <div className="Logo">
    <img src={burgerLogo} alt="My Burger"/>
  </div>
);

export default Logo;