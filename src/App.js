import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={BurgerBuilder}/>
      <Route path="/checkout" component={Checkout}/>
    </Switch>
  </BrowserRouter>
);

export default App;
