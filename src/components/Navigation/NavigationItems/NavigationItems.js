import React from 'react';
import NavigationItem from "./NavigationItem/NavigationItem";
import './NavigationItems.css';

const NavigationItems = () => {
  return (
    <ul className="NavigationItems">
      <NavigationItem to="/" exact>Burger Builder</NavigationItem>
      <NavigationItem to="/orders" exact>Orders</NavigationItem>
    </ul>
  );
};

export default NavigationItems;