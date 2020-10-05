import React from "react";
import ReactModal from "react-modal";
import AddItem from "./AddItem";

const Footer = (props) => {
  return (
    <section className="Footer">
      <button className="addItem" onClick={props.handleOpenModal}>
        Add Item
      </button>

      <ReactModal
        isOpen={props.showModal}
        contentLabel="Add Item"
        onRequestClose={props.handleCloseModal}
      >
        <AddItem handleSubmit={props.handleSubmit} />
      </ReactModal>
    </section>
  );
};

export default Footer;
