import React, { Component } from "react";
import Product from "../Product";
import Store from "../../store";
import axios from "axios";

class Products extends Component {
  state = {
    items: [],
    size: 9
  };
  componentDidMount() {
    axios.get("http://test-api.edfa3ly.io/product").then(response => {
      this.setState({
        isLoaded: true,
        items: response.data.filter(product => product.categoryId === 1),
        selectedCategoryProducts: response.data.filter(
          product => product.categoryId === 1
        )
      });
    });
    Store.subscribe(() => {
      console.log(Store.getState().selectedCategoryProducts);
      this.setState({
        items: Store.getState().selectedCategoryProducts,
        size: 9
      });
    });
  }
  loadMoreProducts = () => {
    this.setState({
      size: this.state.size + 9
    });
  };
  render() {
    const { items, size } = this.state;
    console.log(items);
    return (
      <div className="col col--3">
        <div className="row row--3 row--xs">
          {items.slice(0, size).map(item => (
            <Product
              key={item.id}
              imgSrc={item.image}
              title={item.name}
              rating={item.rating}
              price={item.price}
            />
          ))}
          {items.length === 0 && (
            <p className="no-results">No results matches your selection</p>
          )}
        </div>
        {size < items.length && (
          <button className="load-more" onClick={this.loadMoreProducts}>
            Load More
          </button>
        )}
      </div>
    );
  }
}

export default Products;
