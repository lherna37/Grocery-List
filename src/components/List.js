import React from "react";
import ListItem from "./ListItem";
import AddItem from "./AddItem";

const List = (props) => {
  return (
    <section className="List">
      {props.groceries.length > 0 ? (
        props.groceries.map((item) => (
          <ListItem
            name={item.name}
            amount={item.amount}
            minusOne={(e) => props.minusOne(item, e)} //weird huh? This is the syntax to pass an item to the function being called
            addOne={(e) => props.addOne(item, e)}
            removeItem={(e) => props.removeItem(item, e)}
            key={item.key}
          ></ListItem>
        ))
      ) : (
        <div>
          <p className="instructions">
            Get started by adding your first grocery item here:
          </p>
          <AddItem handleSubmit={props.handleSubmit}/>
        </div>
      )}
    </section>
  );
};

export default List;
