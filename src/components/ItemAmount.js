import React from "react";
import { ReactComponent as Up } from "../images/circle-up.svg";
import { ReactComponent as Down } from "../images/circle-down.svg";

const ItemAmount = (props) => {
  return (
    <div className="ItemAmount">
      <button onClick={props.minusOne}>
        <Down title="Decrease Amount" />
      </button>
      <p className="ItemAmount__count">{props.amount}</p>
      <button onClick={props.addOne}>
        <Up title="Increase Amount" />
      </button>
    </div>
  );
};

export default ItemAmount;
