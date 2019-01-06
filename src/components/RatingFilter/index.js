import React, { Component } from "react";
import Rating from "../Rating";
import Store from "../../store";

class RatingFilter extends Component {
  state = {
    rating: null
  };
  handleClick = rating => {
    Store.dispatch({
      type: "FILTER_CATEGORY_BY_RATING",
      rating: rating
    });
  };
  componentDidMount() {
    Store.subscribe(() => {
      this.setState({
        rating: Store.getState().rating
      });
    });
  }
  render() {
    const { rating } = this.state;
    console.log(rating);
    return (
      <div className="filter filter--rating">
        <h4>Average Rating</h4>
        <ul className="list">
          {[5, 4, 3, 2, 1].map(item => (
            <li
              onClick={this.handleClick.bind(this, item)}
              key={item}
              className={rating === item ? "active" : ""}
            >
              <Rating rate={item} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RatingFilter;
