import {INGREDIENT_PRICES} from "../../constants";
import {ADD_INGREDIENT, INIT_BURGER_BUILDER, REMOVE_INGREDIENT, SET_PURCHASING} from "../actions/burgerBuilderActions";

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

const burgerBuilderReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_BURGER_BUILDER:
      return {...initialState};
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

export default burgerBuilderReducer;