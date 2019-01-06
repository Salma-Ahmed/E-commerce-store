import React, { Component } from "react";
import RatingFilter from "../RatingFilter";
import PriceFilter from "../PriceFilter";
import ColorFilter from "../ColorFilter";
import PropTypes from "prop-types";

class Filters extends Component {
  static propTypes = {
    showFilters: PropTypes.string
  };

  render() {
    const { showFilters } = this.props;
    return (
      <div className={`col filters ${showFilters}`}>
        <PriceFilter min={0} max={1000} allowCross={false} />
        <ColorFilter />
        <RatingFilter />
      </div>
    );
  }
}

export default Filters;
