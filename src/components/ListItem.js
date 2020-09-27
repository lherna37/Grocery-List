import React from "react";
import ItemAmount from "./ItemAmount";

const ListItem = (props) => {
  return (
    <div className="ListItem">
      <div className="ListItem__item">
        <h2>{props.name}</h2>

        {props.amount > 0 ? (
          <ItemAmount
            minusOne={props.minusOne}
            addOne={props.addOne}
            amount={props.amount}
          />
        ) : (
          <div>
            <button className="cancelButton" onClick={props.addOne}>
              Cancel
            </button>
            <button className="removeButton" onClick={props.removeItem}>
              Remove?
            </button>
          </div>
        )}
      </div>
      <div className="ListItem__price">
        <p>${props.price}</p>
      </div>
    </div>
  );
};

export default ListItem;
