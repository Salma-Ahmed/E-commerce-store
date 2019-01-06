import React from "react";
import { shallow } from "enzyme";
import Category from "../components/Category";

describe("Category Test", () => {
  let category;
  beforeEach(() => {
    category = shallow(<Category />);
  });
  it("should render without crashing", () => {
    // eslint-disable-next-line
    category;
  });
  it("should contains an image", () => {
    const image = category.find("img");
    expect(image.length).toBe(1);
  });
  it("should renders a title", () => {
    const title = category.find(".category__title");
    expect(title.length).toBe(1);
  });
});
