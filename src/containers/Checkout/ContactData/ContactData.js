import React, {useState} from 'react';
import axiosOrders from "../../../axios-orders";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import './ContactData.css';

const ContactData = props => {
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    street: '',
    postal: '',
  });

  const [loading, setLoading] = useState(false);

  const customerDataChanged = event => {
    const {name, value} = event.target;

    setCustomer(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const orderHandler = async event => {
    event.preventDefault();
    setLoading(true);

    const order = {
      ingredients: props.ingredients,
      price: props.price,
      customer: {...customer}
    };

    try {
      await axiosOrders.post('/orders.json', order);
    } finally {
      setLoading(false);
      props.history.push('/');
    }
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

  return (
    <div className="ContactData">
      <h4>Enter your Contact Data</h4>
      {form}
    </div>
  );
};

export default ContactData;