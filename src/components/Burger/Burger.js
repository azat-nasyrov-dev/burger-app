import React from 'react';
import Ingredient from "./Ingredient/Ingredient";
import './Burger.css';

const Burger = ({ingredients}) => {
  const ingredientKeys = Object.keys(ingredients);
  let ingList = [];

  ingredientKeys.forEach(igKey => {
    const amount = ingredients[igKey];
    for (let i = 0; i < amount; i++) {
      ingList.push(<Ingredient key={igKey + i} type={igKey}/>);
    }
  });

  if (ingList.length === 0) {
    ingList = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className="Burger">
      <Ingredient type="bread-top"/>
      {ingList}
      <Ingredient type="bread-bottom"/>
    </div>
  )
};

export default Burger;