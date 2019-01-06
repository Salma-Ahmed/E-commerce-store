import React from "react";
import { shallow } from "enzyme";
import RatingFilter from "../components/RatingFilter";
import Rating from "../components/Rating";

describe("RatingFilter Test", () => {
  let ratingFilter;
  beforeEach(() => {
    ratingFilter = shallow(<RatingFilter />);
  });
  it("should render without crashing", () => {
    // eslint-disable-next-line
    ratingFilter;
  });
  it("should contains an <Rating />", () => {
    const rating = ratingFilter.find(Rating);
    expect(rating.length).toBe(5);
  });
});
