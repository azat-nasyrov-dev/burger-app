import React from 'react';
import {Route, Switch} from "react-router-dom";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Layout from "./components/Layout/Layout";

const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={BurgerBuilder}/>
      <Route path="/checkout" component={Checkout}/>
      <Route render={() => <h1>Not found</h1>}/>
    </Switch>
  </Layout>
);

export default App;
