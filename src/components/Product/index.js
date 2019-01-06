import React, { Component } from "react";
import Rating from "../Rating";
import PropTypes from "prop-types";

class Product extends Component {
  static propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number
  };

  render() {
    const { imgSrc, title, price, rating } = this.props;
    return (
      <div className="col">
        <div className="product">
          <img
            src={imgSrc}
            alt={title}
            className="product__img img-responsive"
          />
          <p className="product__title">{title}</p>
          <Rating rate={rating} className="product__rating" />
          <p className="product__price">${price}</p>
        </div>
      </div>
    );
  }
}

export default Product;
