export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const SET_PURCHASING = 'SET_PURCHASING';
export const INIT_BURGER_BUILDER = 'INIT_BURGER_BUILDER';

export const addIngredient = ingName => ({type: ADD_INGREDIENT, ingName});
export const removeIngredient = ingName => ({type: REMOVE_INGREDIENT, ingName});
export const setPurchasing = purchasing => ({type: SET_PURCHASING, purchasing});
export const initBurgerBuilder = () => ({type: INIT_BURGER_BUILDER});