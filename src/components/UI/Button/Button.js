import React from 'react';
import './Button.css';

const Button = ({onClick, btnType, children}) => (
  <button
    onClick={onClick}
    className={['Button', btnType].join(' ')}
  >
    {children}
  </button>
);

export default Button;