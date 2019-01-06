import React from "react";
import { shallow } from "enzyme";
import Product from "../components/Product";
import Rating from "../components/Rating";

describe("Product Test", () => {
  let product;
  beforeEach(() => {
    product = shallow(<Product />);
  });
  it("should render without crashing", () => {
    // eslint-disable-next-line
    product;
  });
  it("should contains an image", () => {
    const image = product.find("img");
    expect(image.length).toBe(1);
  });
  it("should renders a title", () => {
    const title = product.find(".product__title");
    expect(title.length).toBe(1);
  });
  it("should renders a price", () => {
    const price = product.find(".product__price");
    expect(price.length).toBe(1);
  });
  it("should render 5 Categories", () => {
    const rating = product.find(Rating);
    expect(rating.length).toBe(1);
  });
});
