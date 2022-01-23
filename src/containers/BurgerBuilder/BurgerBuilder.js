import React, {useReducer, useState} from 'react';
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import {INGREDIENT_PRICES} from "../../constants";

const ADD_INGREDIENT = 'ADD_INGREDIENT';
const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
const SET_PURCHASING = 'SET_PURCHASING';

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 20,
  purchasing: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingName]: state.ingredients[action.ingName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingName]
      }
    case REMOVE_INGREDIENT:
      if (state.ingredients[action.ingName] <= 0) return state;

      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingName]: state.ingredients[action.ingName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingName]
      }
    case SET_PURCHASING:
      return {...state, purchasing: action.purchasing};
    default:
      return state;
  }
};

const BurgerBuilder = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {ingredients, purchasing, totalPrice} = state;

  const addIngredientHandler = ingName => {
    dispatch({type: ADD_INGREDIENT, ingName});
  };

  const removeIngredientHandler = ingName => {
    dispatch({type: REMOVE_INGREDIENT, ingName});
  };

  const isPurchasable = () => {
    const sum = Object.values(ingredients)
      .reduce((sum, value) => sum + value, 0);

    return sum > 0;
  };

  const purchaseHandler = () => {
    dispatch({type: SET_PURCHASING, purchasing: true});
  };

  const purchaseCancelHandler = () => {
    dispatch({type: SET_PURCHASING, purchasing: false});
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