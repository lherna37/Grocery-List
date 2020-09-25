import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
  return (
    <section className="List">
      {props.groceries.length > 0 ? (
        props.groceries.map((item) => (
          <ListItem
            name={item.name}
            amount={item.amount}
            price={item.price}
            minusOne={(e) => props.minusOne(item, e)} //weird huh? This is the syntax to pass an item to the function being called
            addOne={(e) => props.addOne(item, e)}
            removeItem={(e) => props.removeItem(item, e)}
            key={item.key}
          ></ListItem>
        ))
      ) : (
        <p>
          <em>Please add your grocceries</em>
        </p>
      )}
    </section>
  );
};

export default List;
