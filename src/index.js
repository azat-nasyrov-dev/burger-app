import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import burgerBuilderReducer from "./store/reducers/burgerBuilderReducer";
import ordersReducer from "./store/reducers/ordersReducer";

import App from './App';
import './index.css';

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  orders: ordersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancers);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
