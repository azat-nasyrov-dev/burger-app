import React from 'react';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import './Layout.css';

const Layout = props => {
  return (
    <>
      <Toolbar/>
      <main className="Layout-Content">
        {props.children}
      </main>
    </>
  );
};

export default Layout;