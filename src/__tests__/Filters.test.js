import React from "react";
import { shallow } from "enzyme";
import Filters from "../components/Filters";
import ColorFilter from "../components/ColorFilter";
import PriceFilter from "../components/PriceFilter";
import RatingFilter from "../components/RatingFilter";

describe("Filters Test", () => {
  let filters;
  beforeEach(() => {
    filters = shallow(<Filters />);
  });
  it("should render without crashing", () => {
    // eslint-disable-next-line
    filters;
  });
  it("should contains an <ColorFilter />", () => {
    const color = filters.find(ColorFilter);
    expect(color.length).toBe(1);
  });
  it("should renders a <PriceFilter />", () => {
    const price = filters.find(PriceFilter);
    expect(price.length).toBe(1);
  });
  it("should renders a <RatingFilter />", () => {
    const rating = filters.find(RatingFilter);
    expect(rating.length).toBe(1);
  });
});
