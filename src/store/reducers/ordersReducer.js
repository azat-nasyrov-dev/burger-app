import {
  FETCH_ORDERS_FAILURE,
  FETCH_ORDERS_REQUEST,
  FETCH_ORDERS_SUCCESS,
  INIT_ORDER,
  ORDER_FAILURE,
  ORDER_REQUEST,
  ORDER_SUCCESS
} from "../actions/ordersActions";

const initialState = {
  loading: false,
  error: null,
  ordered: false,
  orders: [],
  fetchLoading: false,
  fetchError: false,
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_ORDER:
      return {...initialState};
    case ORDER_REQUEST:
      return {...state, loading: true};
    case ORDER_SUCCESS:
      return {...state, loading: false, ordered: true};
    case ORDER_FAILURE:
      return {...state, loading: false, error: action.error};
    case FETCH_ORDERS_REQUEST:
      return {...state, fetchLoading: true};
    case FETCH_ORDERS_SUCCESS:
      return {...state, orders: action.orders, fetchLoading: false};
    case FETCH_ORDERS_FAILURE:
      return {...state, fetchLoading: false, fetchError: action.error};
    default:
      return state;
  }
};

export default ordersReducer;