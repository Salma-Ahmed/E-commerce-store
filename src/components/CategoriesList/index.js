import React, { Component } from "react";
import Category from "../Category";
import axios from "axios";

class CategoriesList extends Component {
  state = {
    items: []
  };
  componentDidMount() {
    axios.get("http://test-api.edfa3ly.io/category").then(response => {
      this.setState({
        isLoaded: true,
        items: response.data
      });
    });
  }
  render() {
    const { items } = this.state;
    return (
      <div className="row row--5 row--sm--3 row--xs--2">
        {items.map(item => (
          <Category
            key={item.id}
            id={item.id}
            imgSrc={item.image}
            title={item.name}
          />
        ))}
      </div>
    );
  }
}

export default CategoriesList;
