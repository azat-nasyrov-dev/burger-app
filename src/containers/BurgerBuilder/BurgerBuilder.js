import React, {useState} from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 5,
  cheese: 20,
  meat: 50,
  bacon: 30,
};

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  });

  const [totalPrice, setTotalPrice] = useState(20);

  const addIngredientHandler = type => {
    setIngredients({
      ...ingredients,
      [type]: ingredients[type] + 1
    });

    setTotalPrice(totalPrice + INGREDIENT_PRICES[type]);
  };

  const removeIngredientHandler = type => {
    if (ingredients[type] <= 0) return;

    setIngredients({
      ...ingredients,
      [type]: ingredients[type] - 1
    });

    setTotalPrice(totalPrice - INGREDIENT_PRICES[type]);
  };

  return (
    <>
      <Burger ingredients={ingredients}/>
      <BuildControls
        ingredients={ingredients}
        price={totalPrice}
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
      />
    </>
  );
};

export default BurgerBuilder;