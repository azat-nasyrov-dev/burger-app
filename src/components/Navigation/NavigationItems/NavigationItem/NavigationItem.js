import React from 'react';
import {NavLink} from "react-router-dom";
import './NavigationItem.css';

const NavigationItem = ({to, exact, children}) => (
  <li className="NavigationItem">
    <NavLink to={to} exact={exact}>
      {children}
    </NavLink>
  </li>
);

export default NavigationItem;