import {ORDER_FAILURE, ORDER_REQUEST, ORDER_SUCCESS} from "../actions/ordersActions";

const initialState = {
  loading: false,
  error: null,
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_REQUEST:
      return {...state, loading: true};
    case ORDER_SUCCESS:
      return {...state, loading: false};
    case ORDER_FAILURE:
      return {...state, loading: false, error: action.error};
    default:
      return state;
  }
};

export default ordersReducer;