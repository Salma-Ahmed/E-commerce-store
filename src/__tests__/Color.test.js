import React from "react";
import { shallow } from "enzyme";
import Color from "../components/Color";

describe("Color Test", () => {
  let color;
  beforeEach(() => {
    color = shallow(<Color />);
  });
  it("should render without crashing", () => {
    // eslint-disable-next-line
    color;
  });
  it("should contains an input", () => {
    const input = color.find("input");
    expect(input.length).toBe(1);
  });
  it("should renders a label", () => {
    const label = color.find("label");
    expect(label.length).toBe(1);
  });
  it("should change checked value on change", () => {
    color.find("input").simulate("change", { target: { checked: true } });
  });
});
