import React, { Component } from "react";
import Color from "../Color";
import uuid from "uuid";
import axios from "axios";
import Store from "../../store";

class ColorFilter extends Component {
  state = {
    colors: [],
    listOfColors: [],
    checked: false
  };
  componentDidMount() {
    axios.get("http://test-api.edfa3ly.io/product").then(response => {
      const colors = [];
      response.data.forEach((element, index) => {
        colors.push(element.color);
      });
      this.setState({
        colors: colors.filter((elem, index, self) => {
          return index === self.indexOf(elem);
        }),
        listOfColors: colors.filter((elem, index, self) => {
          return index === self.indexOf(elem);
        })
      });
    });
    Store.subscribe(() => {
      const action = Store.getState().action;
      console.log(action);
      if (action === "FILTER_BY_CATEGORY") {
        this.setState({
          checked: false
        });
      }
    });
  }
  handleChange = event => {
    Store.dispatch({
      type: "FILTER_CATEGORY_BY_COLOR",
      clear: true
    });
    if (event.target.value === "") {
      this.setState({
        colors: this.state.listOfColors,
        checked: false
      });
    } else {
      this.setState({
        colors: this.state.listOfColors.filter(color =>
          color.includes(event.target.value)
        ),
        checked: false
      });
    }
  };
  handleSubmit = () => {};

  clearFilter = () => {
    this.setState({
      colors: this.state.listOfColors,
      checked: false
    });
    Store.dispatch({
      type: "FILTER_CATEGORY_BY_COLOR",
      clear: true
    });
  };
  render() {
    const { colors, checked } = this.state;

    return (
      <div className="filter filter--color">
        <h4>Color</h4>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Enter Color"
          />
          <ul className="list">
            {colors.map(color => (
              <li key={uuid()}>
                <Color color={color} checked={checked} />
              </li>
            ))}
          </ul>
        </form>
        <button className="filter__clear" onClick={this.clearFilter}>
          <i className="fa fa-times" aria-hidden="true" /> clear
        </button>
      </div>
    );
  }
}

export default ColorFilter;
