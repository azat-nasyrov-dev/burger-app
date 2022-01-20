import React from 'react';
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import './Toolbar.css';

const Toolbar = () => {
  return (
    <header className="Toolbar">
      <div className="Toolbar-logo">
        <Logo/>
      </div>
      <nav>
        <NavigationItems/>
      </nav>
    </header>
  );
};

export default Toolbar;