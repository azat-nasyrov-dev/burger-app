import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axiosOrders from "../../axios-orders";
import OrderItem from "../../components/Order/OrderItem/OrderItem";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import {fetchOrders} from "../../store/actions/ordersActions";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders.orders);
  const loading = useSelector(state => state.orders.fetchLoading);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  let ordersOutput = orders.map(order => (
    <ErrorBoundary key={order.id}>
      <OrderItem
        key={order.id}
        ingredients={order.ingredients}
        price={order.price}
      />
    </ErrorBoundary>
  ));

  if (loading) {
    ordersOutput = <Spinner/>
  }

  return ordersOutput;
};

export default withErrorHandler(Orders, axiosOrders);