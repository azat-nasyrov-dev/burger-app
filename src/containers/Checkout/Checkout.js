import React, {useRef} from 'react';
import {Route} from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import {INGREDIENT_PRICES} from "../../constants";

const getTotalPrice = ingredients => {
  return Object.keys(ingredients).reduce((total, ingName) => {
    total += ingredients[ingName] * INGREDIENT_PRICES[ingName];
    return total;
  }, 20);
};

const parseSearch = search => {
  const params = new URLSearchParams(search);
  return Object.fromEntries(params);
};

const Checkout = props => {
  const parsed = parseSearch(props.location.search);
  const ingredients = useRef(parsed);

  const checkoutCancelledHandler = () => {
    props.history.goBack();
  };

  const checkoutContinuedHandler = () => {
    props.history.replace('/checkout/contact-data');
  };

  const price = getTotalPrice(ingredients.current);

  return (
    <>
      <CheckoutSummary
        ingredients={ingredients.current}
        checkoutCancelled={checkoutCancelledHandler}
        checkoutContinued={checkoutContinuedHandler}
      />
      <Route
        path={props.match.path + '/contact-data'}
        // component={ContactData}
        render={props => (
          <ContactData ingredients={ingredients.current} price={price} {...props}/>
        )}
      />
    </>
  )
};

export default Checkout;