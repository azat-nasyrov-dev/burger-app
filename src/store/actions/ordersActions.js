import axiosOrders from "../../axios-orders";

export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_FAILURE = 'ORDER_FAILURE';

export const orderRequest = () => ({type: ORDER_REQUEST});
export const orderSuccess = () => ({type: ORDER_SUCCESS});
export const orderFailure = error => ({type: ORDER_FAILURE, error});

export const createOrder = order => {
  return async dispatch => {
    try {
      dispatch(orderRequest());
      await axiosOrders.post('/orders.json', order);
      dispatch(orderSuccess());
    } catch (e) {
      dispatch(orderFailure(e));
    }
  };
};