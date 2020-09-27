import React from "react";

//class-based because i want to easily clear the fields
const AddItem = (props) => {
  return (
    <section className="AddItem">
      <form className="AddItem__Form" onSubmit={props.handleSubmit}>
        <label>Item:</label>
        <input type="text" name="item" placeholder="Peach" required></input>
        <label>How Many?</label>
        <input type="number" name="amount" placeholder="1" required></input>
        <label>Price: <em>(Optional)</em></label>
        <input type="text" name="price" placeholder="1.50"></input>
        <button className="AddItem__Button">Add Item</button>
      </form>
    </section>
  );
};

export default AddItem;
