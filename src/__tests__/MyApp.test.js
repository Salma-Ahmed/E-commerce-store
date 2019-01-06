import React from "react";
import { shallow } from "enzyme";
import MyApp from "../components/MyApp";
import Filters from "../components/Filters";
import Products from "../components/Products";
import Titles from "../components/Titles";
import CategoriesList from "../components/CategoriesList";

describe("MyApp Test", () => {
  let app;
  beforeEach(() => {
    app = shallow(<MyApp />);
  });
  it("should render without crashing", () => {
    // eslint-disable-next-line
    app;
  });
  it("should contains an <Filters />", () => {
    const filters = app.find(Filters);
    expect(filters.length).toBe(1);
  });
  it("should renders a <Products />", () => {
    const products = app.find(Products);
    expect(products.length).toBe(1);
  });
  it("should renders a <Titles />", () => {
    const titles = app.find(Titles);
    expect(titles.length).toBe(1);
  });
  it("should renders a <CategoriesList />", () => {
    const categoriesList = app.find(CategoriesList);
    expect(categoriesList.length).toBe(1);
  });
});
