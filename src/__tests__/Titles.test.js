import React from "react";
import { shallow } from "enzyme";
import Titles from "../components/Titles";

describe("Titles Test", () => {
  let titles;
  beforeEach(() => {
    titles = shallow(<Titles />);
  });
  it("should render without crashing", () => {
    // eslint-disable-next-line
    titles;
  });
  it("should contains  h1", () => {
    const h1 = titles.find("h1");
    expect(h1.length).toBe(1);
  });
  it("should contains  h2", () => {
    const h2 = titles.find("h2");
    expect(h2.length).toBe(1);
  });
});
