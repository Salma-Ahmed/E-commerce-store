import React, { Component } from "react";
import { Range } from "rc-slider";
import Store from "../../store";
import "rc-slider/assets/index.css";
import PropTypes from "prop-types";

class PriceFilter extends Component {
  static propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    allowCross: PropTypes.bool
  };

  state = {
    sliderValues: [0, 1000]
  };
  componentDidMount() {
    Store.subscribe(() => {
      const action = Store.getState().action;
      if (action === "FILTER_BY_CATEGORY") {
        this.setState({
          sliderValues: [0, 1000]
        });
      }
    });
  }
  handleChange = sliderValues => {
    this.setState({
      sliderValues
    });
    Store.dispatch({
      type: "FILTER_CATEGORY_BY_PRICE",
      min: sliderValues[0],
      max: sliderValues[1]
    });
  };
  clearFilter = sliderValues => {
    this.setState({
      sliderValues: [0, 1000]
    });
    Store.dispatch({
      type: "FILTER_CATEGORY_BY_PRICE",
      min: 0,
      max: 1000
    });
  };
  render() {
    const { min, max, allowCross } = this.props;
    const { sliderValues } = this.state;
    return (
      <div className="filter filter--price">
        <h4>Price Range</h4>
        <div>
          <p>from ${sliderValues[0]}</p>
          <p>to ${sliderValues[1]}</p>
        </div>
        <Range
          min={min}
          max={max}
          step={1}
          allowCross={allowCross}
          defaultValue={sliderValues}
          onChange={this.handleChange}
          value={sliderValues}
        />
        <button className="filter__clear" onClick={this.clearFilter}>
          <i className="fa fa-times" aria-hidden="true" /> clear
        </button>
      </div>
    );
  }
}

export default PriceFilter;
