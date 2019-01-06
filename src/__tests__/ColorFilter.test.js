import React from "react";
import { shallow } from "enzyme";
import ColorFilter from "../components/ColorFilter";

describe("ColorFilter Test", () => {
  let colorFilter;
  beforeEach(() => {
    colorFilter = shallow(<ColorFilter />);
  });
  it("should render without crashing", () => {
    // eslint-disable-next-line
    colorFilter;
  });
  it("should contains an form", () => {
    const form = colorFilter.find("form");
    expect(form.length).toBe(1);
  });
  it("should renders a title", () => {
    const title = colorFilter.find("h4");
    expect(title.length).toBe(1);
  });
  it("should renders an input", () => {
    const input = colorFilter.find("input[type='text']");
    expect(input.length).toBe(1);
    input.simulate("change", { target: { value: "value" } });
  });
  it("should renders a button", () => {
    // const mockCallBack = jest.fn();
    const button = colorFilter.find("button");
    expect(button.length).toBe(1);
    button.simulate("click");
    // expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
