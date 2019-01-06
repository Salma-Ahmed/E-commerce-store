import React, { Component } from "react";
import CategoriesList from "../CategoriesList";
import Filters from "../Filters";
import Products from "../Products";
import Titles from "../Titles";

class MyApp extends Component {
  state = {
    showFilters: false
  };
  showFilters = () => {
    this.setState({
      showFilters: !this.state.showFilters
    });
  };
  render() {
    const { showFilters } = this.state;
    return (
      <section>
        <button className="mob-only" onClick={this.showFilters}>
          {showFilters ? "Hide" : "Filters"}
        </button>
        <div className="container">
          <Titles />
          <CategoriesList />
          <div className="row row--4 row--xs row--sm">
            <Filters showFilters={showFilters ? "filters--mob" : ""} />
            <Products />
          </div>
        </div>
      </section>
    );
  }
}

export default MyApp;
