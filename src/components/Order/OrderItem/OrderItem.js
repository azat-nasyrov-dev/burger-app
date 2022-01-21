import React from 'react';
import './OrderItem.css';

const OrderItem = ({ingredients, price}) => {
  if (Math.random() > 0.5) throw new Error('Well, this happened');

  const ingredientsArr = Object.keys(ingredients).map(igName => {
    return {
      name: igName,
      amount: ingredients[igName]
    };
  });

  const ingredientOutput = ingredientsArr.map(ig => (
    <span key={ig.name}>{ig.name} ({ig.amount})</span>
  ));

  return (
    <div className="OrderItem">
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>{price} KGS</strong></p>
    </div>
  );
};

export default OrderItem;