import React from 'react';

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => (
      <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>
          {igKey}
        </span>: {props.ingredients[igKey]}
      </li>
    ));

  return (
    <>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p><strong>Total price: {props.price}</strong></p>
      <p>Continue to checkout?</p>
    </>
  );
};

export default OrderSummary;