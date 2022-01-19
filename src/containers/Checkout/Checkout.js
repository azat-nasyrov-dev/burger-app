import React, {useState} from 'react';
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

const Checkout = props => {
  const [ingredients, setIngredients] = useState({
    salad: 1,
    meat: 1,
    cheese: 1,
    bacon: 1
  });

  return <CheckoutSummary ingredients={ingredients}/>
};

export default Checkout;