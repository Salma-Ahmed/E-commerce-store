import React, { Component } from "react";
import PropTypes from "prop-types";

class Rating extends Component {
  static propTypes = {
    rate: PropTypes.number
  };

  static defaultProps = {};

  render() {
    const { rate } = this.props;

    return (
      <div className="rating">
        {[1, 2, 3, 4, 5].map(item => (
          <span key={item}>
            <i
              className="fa fa-star"
              data-active={rate >= item ? "true" : "false"}
              aria-hidden="true"
            />
          </span>
        ))}
      </div>
    );
  }
}

export default Rating;
