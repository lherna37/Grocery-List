import React from "react";
import List from "./List";
import Header from "./Header";
import Footer from "./Footer";

const { v4: uuidv4 } = require("uuid");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.minusOne = this.minusOne.bind(this);
    this.addOne = this.addOne.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.state = {
      groceries: [],
      showModal: false,
      total: null,
    };
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("groceries");
      const groceries = JSON.parse(json); //convert the grocieres stringified version to its original version [ {}, {}, {} ]
      if (groceries) {
        this.setState(() => ({ groceries }));
      }
    } catch (e) {
      // fallback to default empty grocceries
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.groceries.length !== prevState.groceries.length) {
      const json = JSON.stringify(this.state.groceries);
      localStorage.setItem("groceries", json);
    }
  }

  minusOne = (item) => {
    this.setState((prevState) => ({
      groceries: prevState.groceries.map((el) =>
        el.key === item.key
          ? {
              ...el,
              //TODO: If amount = 0, remove
              amount: el.amount - 1,
            }
          : el
      ),
    }));
  };

  addOne = (item) => {
    this.setState((prevState) => ({
      groceries: prevState.groceries.map((el) =>
        el.key === item.key
          ? {
              ...el,
              amount: parseInt(el.amount) + 1,
            }
          : el
      ),
    }));
  };





  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      name: e.target.item.value,
      amount: e.target.amount.value,
      price: e.target.price.value,
      key: uuidv4(),
    };
    this.setState((prevState) => ({
      groceries: [...this.state.groceries, newItem],
      total: prevState.total + parseFloat(e.target.price.value),
    }));

    this.handleCloseModal();

    //TODO: reset inputs after submission
  };

  removeItem = (item) => {
    this.setState((prevState) => ({
      groceries: prevState.groceries.filter(
        (stateItem) => stateItem.key !== item.key
      ),
    }));
  };

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <main className="App">
        <Header />

        <List
          groceries={this.state.groceries}
          minusOne={this.minusOne}
          addOne={this.addOne}
          removeItem={this.removeItem}
          handleSubmit={this.handleSubmit}
        />

        <Footer
          showModal={this.state.showModal}
          handleOpenModal={this.handleOpenModal}
          handleCloseModal={this.handleCloseModal}
          handleSubmit={this.handleSubmit}
          groceries={this.state.groceries}
          total={this.state.total}
        />
      </main>
    );
  }
}

export default App;
