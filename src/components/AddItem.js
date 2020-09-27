import React from "react";

//class-based because i want to easily clear the fields
const AddItem = (props) => {
  return (
    <section className="AddItem">
      <form className="AddItem__Form" onSubmit={props.handleSubmit}>
        <label>Item:</label>
        <input type="text" name="item" required></input>
        <label>Amount:</label>
        <input type="number" name="amount" required></input>
        <label>Price:</label>
        <input type="text" name="price" defaultValue="0"></input>
        <button className="AddItem__Button">Add Item</button>
      </form>
    </section>
  );
};

export default AddItem;
