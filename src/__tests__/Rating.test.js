import React from "react";
import { shallow } from "enzyme";
import Rating from "../components/Rating";

describe("Rating Test", () => {
  let rating;
  beforeEach(() => {
    rating = shallow(<Rating />);
  });
  it("should render without crashing", () => {
    // eslint-disable-next-line
    rating;
  });
  it("should contains an list of spans", () => {
    const list = rating.find("span");
    expect(list.length).toBe(5);
  });
});
