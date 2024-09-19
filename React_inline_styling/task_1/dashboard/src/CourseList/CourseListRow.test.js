import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("CourseListRow component tests", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should render one cell with colspan = 2 when textSecondCell is null", () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell={null} />);

    // Ensure the correct number of children (1 cell)
    expect(wrapper.find("tr").children()).toHaveLength(1);

    // Verify that the only child is a <th> with colSpan="2"
    const th = wrapper.find("th");
    expect(th.exists()).toBe(true);
    expect(th.prop("colSpan")).toEqual("2");
    expect(th.text()).toEqual("test");
  });

  it("should render two cells when textSecondCell is not null", () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test" />);

    // Ensure there are two children (two cells)
    expect(wrapper.find("tr").children()).toHaveLength(2);

    // Verify the content of the first cell (td)
    const firstCell = wrapper.find("td").at(0);
    expect(firstCell.exists()).toBe(true);
    expect(firstCell.text()).toEqual("test");

    // Verify the content of the second cell (td)
    const secondCell = wrapper.find("td").at(1);
    expect(secondCell.exists()).toBe(true);
    expect(secondCell.text()).toEqual("test");
  });
});
