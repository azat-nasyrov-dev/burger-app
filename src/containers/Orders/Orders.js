import React, {useEffect, useState} from 'react';
import axiosOrders from "../../axios-orders";
import OrderItem from "../../components/Order/OrderItem/OrderItem";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosOrders.get('/orders.json');
      const fetchedOrders = Object.keys(response.data).map(id => {
        return {...response.data[id], id};
      });

      setOrders(fetchedOrders);
    };

    fetchData().finally(() => setLoading(false));
  }, []);

  let ordersOutput = orders.map(order => (
    <OrderItem
      key={order.id}
      ingredients={order.ingredients}
      price={order.price}
    />
  ));

  if (loading) {
    ordersOutput = <Spinner/>
  }

  return ordersOutput;
};

export default withErrorHandler(Orders, axiosOrders);