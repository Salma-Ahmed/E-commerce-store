import React from "react";
import { shallow } from "enzyme";
import Products from "../components/Products";

describe("Products List Test", () => {
  let products;
  beforeEach(() => {
    products = shallow(<Products />);
  });
  it("should render without crashing", () => {
    // eslint-disable-next-line
    products;
  });
});
