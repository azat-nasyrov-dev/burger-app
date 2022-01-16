import React, {useState} from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  });

  return (
    <>
      <Burger ingredients={ingredients}/>
      <BuildControls ingredients={ingredients}/>
    </>
  );
};

export default BurgerBuilder;