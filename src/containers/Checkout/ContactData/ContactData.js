import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import {createOrder} from "../../../store/actions/ordersActions";
import './ContactData.css';

const ContactData = props => {
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.burgerBuilder.ingredients);
  const totalPrice = useSelector(state => state.burgerBuilder.totalPrice);
  const loading = useSelector(state => state.orders.loading);
  const ordered = useSelector(state => state.orders.ordered);

  /*
  Этот вариант Advanced Case!
  const {ingredients, totalPrice} = useSelector(state => {
    return {
      ingredients: state.burgerBuilder.ingredients,
      totalPrice: state.burgerBuilder.totalPrice,
      loading: state.orders.loading
    }
  }, shallowEqual);
   */

  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    street: '',
    postal: '',
  });

  const customerDataChanged = event => {
    const {name, value} = event.target;

    setCustomer(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const orderHandler = event => {
    event.preventDefault();

    const order = {
      ingredients,
      price: totalPrice,
      customer: {...customer}
    };
    dispatch(createOrder(order));
  };

  let form = (
    <form onSubmit={orderHandler}>
      <input
        className="Input" placeholder="Your name"
        type="text" name="name"
        value={customer.name}
        onChange={customerDataChanged}
      />
      <input
        className="Input" placeholder="Your Mail"
        type="email" name="email"
        value={customer.email}
        onChange={customerDataChanged}
      />
      <input
        className="Input" placeholder="Street"
        type="text" name="street"
        value={customer.street}
        onChange={customerDataChanged}
      />
      <input
        className="Input" placeholder="Postal Code"
        type="text" name="postal"
        value={customer.postal}
        onChange={customerDataChanged}
      />
      <Button btnType="Success">ORDER</Button>
    </form>
  );

  if (loading) {
    form = <Spinner/>
  }

  if (ordered) {
    form = <Redirect to="/"/>
  }

  return (
    <div className="ContactData">
      <h4>Enter your Contact Data</h4>
      {form}
    </div>
  );
};

export default ContactData;