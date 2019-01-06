import React from "react";
import { shallow } from "enzyme";
import PriceFilter from "../components/PriceFilter";
import { Range } from "rc-slider";

describe("PriceFilter Test", () => {
  let priceFilter;
  beforeEach(() => {
    priceFilter = shallow(<PriceFilter />);
  });
  it("should render without crashing", () => {
    // eslint-disable-next-line
    priceFilter;
  });
  it("should contains an <Range />", () => {
    const range = priceFilter.find(Range);
    expect(range.length).toBe(1);
  });
});
