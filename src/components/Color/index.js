import React, { Component } from "react";
import Store from "../../store";
import PropTypes from "prop-types";

class Color extends Component {
  static propTypes = {
    color: PropTypes.string
  };

  state = {
    checked: this.props.checked
  };

  handleChange = (color, event) => {
    this.setState({
      checked: !this.state.checked
    });
    Store.dispatch({
      type: "FILTER_CATEGORY_BY_COLOR",
      color: event.target.value,
      checked: event.target.checked
    });
  };

  render() {
    const { color } = this.props;
    const { checked } = this.state;
    return (
      <>
        <input
          onChange={this.handleChange.bind(this, color)}
          className="styled-checkbox"
          id={color}
          type="checkbox"
          value={color}
          checked={checked}
        />
        <label htmlFor={color}>{color}</label>
      </>
    );
  }
}

export default Color;
