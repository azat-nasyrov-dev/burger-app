import React, {useEffect} from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import {useDispatch, useSelector} from "react-redux";
import {
  addIngredient,
  initBurgerBuilder,
  removeIngredient,
  setPurchasing
} from "../../store/actions/burgerBuilderActions";
import {initOrder} from "../../store/actions/ordersActions";

const BurgerBuilder = props => {
  const dispatch = useDispatch();
  const {ingredients, totalPrice, purchasing} = useSelector(state => state.burgerBuilder);

  useEffect(() => {
    dispatch(initBurgerBuilder());
  }, [dispatch]);

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
    dispatch(initOrder());
    props.history.push('/checkout');
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