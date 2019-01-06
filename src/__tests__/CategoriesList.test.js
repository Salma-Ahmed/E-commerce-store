import React, { Component } from "react";
import { shallow } from "enzyme";
import CategoriesList from "../components/CategoriesList";

describe("Categories List Test", () => {
  let categoriesList;
  beforeEach(() => {
    categoriesList = shallow(<CategoriesList items={[1, 2, 3, 4, 5]} />);
  });
  it("should render without crashing", () => {
    // eslint-disable-next-line
    categoriesList;
  });
});
