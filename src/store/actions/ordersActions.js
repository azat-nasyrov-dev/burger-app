import axiosOrders from "../../axios-orders";

export const INIT_ORDER = 'INIT_ORDER';
export const ORDER_REQUEST = 'ORDER_REQUEST';
export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const ORDER_FAILURE = 'ORDER_FAILURE';
export const FETCH_ORDERS_REQUEST = 'FETCH_ORDERS_REQUEST';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAILURE = 'FETCH_ORDERS_FAILURE';

export const initOrder = () => ({type: INIT_ORDER});
export const orderRequest = () => ({type: ORDER_REQUEST});
export const orderSuccess = () => ({type: ORDER_SUCCESS});
export const orderFailure = error => ({type: ORDER_FAILURE, error});
export const fetchOrdersRequest = () => ({type: FETCH_ORDERS_REQUEST});
export const fetchOrdersSuccess = orders => ({type: FETCH_ORDERS_SUCCESS, orders});
export const fetchOrdersFailure = error => ({type: FETCH_ORDERS_FAILURE, error});

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

export const fetchOrders = () => {
  return async dispatch => {
    try {
      dispatch(fetchOrdersRequest());
      const response = await axiosOrders.get('/orders.json');
      const orders = Object.keys(response.data).map(id => ({
        ...response.data[id],
        id
      }));
      dispatch(fetchOrdersSuccess(orders));
    } catch (error) {
      dispatch(fetchOrdersFailure(error));
    }
  };
};