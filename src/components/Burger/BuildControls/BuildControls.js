import React from 'react';
import BuildControl from "./BuildControl/BuildControl";
import './BuildControls.css';

const BuildControls = props => {
  return (
    <div className="BuildControls">
      <p>Current Price: <strong>{props.price} KGS</strong></p>
      {Object.keys(props.ingredients).map(ingType => (
        <BuildControl
          key={ingType}
          disabled={props.ingredients[ingType] === 0}
          type={ingType}
          added={() => props.ingredientAdded(ingType)}
          removed={() => props.ingredientRemoved(ingType)}
        />
      ))}
      <button
        className="OrderButton"
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;