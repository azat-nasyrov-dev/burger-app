import React, {useState} from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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

  const [purchasable, setPurchasable] = useState(false);

  const addIngredientHandler = type => {
    const updatedIngredients = {
      ...ingredients,
      [type]: ingredients[type] + 1
    };

    setIngredients(updatedIngredients);
    setTotalPrice(totalPrice + INGREDIENT_PRICES[type]);
    updatePurchaseState(updatedIngredients);
  };

  const removeIngredientHandler = type => {
    if (ingredients[type] <= 0) return;

    const updatedIngredients = {
      ...ingredients,
      [type]: ingredients[type] - 1
    };

    setIngredients(updatedIngredients);
    setTotalPrice(totalPrice - INGREDIENT_PRICES[type]);
    updatePurchaseState(updatedIngredients);
  };

  const updatePurchaseState = ingredients => {
    const sum = Object.values(ingredients)
      .reduce((sum, value) => sum + value, 0);

    setPurchasable(sum > 0);
  };

  return (
    <>
      <Modal>
        <OrderSummary
          ingredients={ingredients}
          price={totalPrice}
        />
      </Modal>
      <Burger ingredients={ingredients}/>
      <BuildControls
        ingredients={ingredients}
        price={totalPrice}
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        purchasable={purchasable}
      />
    </>
  );
};

export default BurgerBuilder;