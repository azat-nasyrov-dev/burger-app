import React from 'react';
import {Route} from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";
import {useSelector} from "react-redux";

const Checkout = props => {
 const ingredients = useSelector(state => state.burgerBuilder.ingredients);

  const checkoutCancelledHandler = () => {
    props.history.goBack();
  };

  const checkoutContinuedHandler = () => {
    props.history.replace('/checkout/contact-data');
  };

  return (
    <>
      <CheckoutSummary
        ingredients={ingredients}
        checkoutCancelled={checkoutCancelledHandler}
        checkoutContinued={checkoutContinuedHandler}
      />
      <Route
        path={props.match.path + '/contact-data'}
        component={ContactData}
      />
    </>
  )
};

export default Checkout;