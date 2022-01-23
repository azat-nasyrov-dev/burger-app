import React from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import {useDispatch, useSelector} from "react-redux";
import {addIngredient, removeIngredient, setPurchasing} from "../../store/actions/burgerBuilderActions";

const BurgerBuilder = props => {
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.ingredients);
  const totalPrice = useSelector(state => state.totalPrice);
  const purchasing = useSelector(state => state.purchasing);

  const addIngredientHandler = ingName => {
    dispatch(addIngredient(ingName));
  };

  const removeIngredientHandler = ingName => {
    dispatch(removeIngredient(ingName));
  };

  const isPurchasable = () => {
    const sum = Object.values(ingredients)
      .reduce((sum, value) => sum + value, 0);

    return sum > 0;
  };

  const purchaseHandler = () => {
    dispatch(setPurchasing(true));
  };

  const purchaseCancelHandler = () => {
    dispatch(setPurchasing(false));
  };

  const purchaseContinueHandler = () => {
    const params = new URLSearchParams(ingredients);

    props.history.push({
      pathname: '/checkout',
      search: '?' + params.toString()
    });
  };

  return (
    <>
      <Modal
        show={purchasing}
        closed={purchaseCancelHandler}
      >
        <OrderSummary
          ingredients={ingredients}
          price={totalPrice}
          purchaseCancelled={purchaseCancelHandler}
          purchaseContinued={purchaseContinueHandler}
        />
      </Modal>
      <Burger ingredients={ingredients}/>
      <BuildControls
        ingredients={ingredients}
        price={totalPrice}
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        purchasable={isPurchasable()}
        ordered={purchaseHandler}
      />
    </>
  );
};

export default BurgerBuilder;