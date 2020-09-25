import React from "react";
import { ReactComponent as MoreOptions } from "../images/more_vert.svg";

const Header = (props) => {
  return (
    <header className="Header">
      <nav>
        <MoreOptions
          className="Header__icon"
          title="See Additional Options"
          onClick={props.handleOpenModal}
        />
      </nav>
      <h1>Grocery List</h1>
    </header>
  );
};

export default Header;
