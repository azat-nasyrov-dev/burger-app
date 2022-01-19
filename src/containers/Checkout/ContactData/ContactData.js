import React from 'react';
import Button from "../../../components/UI/Button/Button";
import './ContactData.css';

const ContactData = () => {
  return (
    <div className="ContactData">
      <h4>Enter your Contact Data</h4>
      <form>
        <input className="Input" type="text" name="name" placeholder="Your name"/>
        <input className="Input" type="email" name="email" placeholder="Your Mail"/>
        <input className="Input" type="text" name="street" placeholder="Street"/>
        <input className="Input" type="text" name="postal" placeholder="Postal Code"/>
        <Button btnType="Success">ORDER</Button>
      </form>
    </div>
  );
};

export default ContactData;