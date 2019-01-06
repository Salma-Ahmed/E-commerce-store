import React, { Component } from "react";
import Store from "../../store";
import PropTypes from "prop-types";

class Category extends Component {
  static propTypes = {
    imgSrc: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string
  };
  state = {
    categoryId: 1
  };
  handleClick = id => {
    Store.dispatch({
      type: "FILTER_BY_CATEGORY",
      categoryId: id
    });
  };
  componentDidMount() {
    Store.subscribe(() => {
      this.setState({
        categoryId: Store.getState().categoryId
      });
    });
  }
  render() {
    const { imgSrc, title, id } = this.props;
    const { categoryId } = this.state;
    return (
      <div className="col" onClick={this.handleClick.bind(this, id)}>
        <div className={id === categoryId ? "category active" : "category"}>
          <img
            src={imgSrc}
            alt={title}
            className="category__img img-responsive"
          />
          {/* eslint-disable-next-line */}
          <a className="category__overlay">
            <p className="category__title">{title}</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Category;
