import React from "react";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

describe("CourseList component tests", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders 5 different rows", () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    // Test for header rows in <thead>
    expect(wrapper.find("thead").children()).toHaveLength(2);
    const theadRows = wrapper.find("thead").children();
    expect(theadRows.at(0).dive().find("th").text()).toEqual("Course name");
    expect(theadRows.at(1).dive().find("th").text()).toEqual("Credit");

    // Test for body rows in <tbody>
    expect(wrapper.find("tbody").children()).toHaveLength(3);
    const tbodyRows = wrapper.find("tbody").children();

    expect(tbodyRows.at(0).dive().find("td").at(0).text()).toEqual("ES6");
    expect(tbodyRows.at(0).dive().find("td").at(1).text()).toEqual("60");

    expect(tbodyRows.at(1).dive().find("td").at(0).text()).toEqual("Webpack");
    expect(tbodyRows.at(1).dive().find("td").at(1).text()).toEqual("20");

    expect(tbodyRows.at(2).dive().find("td").at(0).text()).toEqual("React");
    expect(tbodyRows.at(2).dive().find("td").at(1).text()).toEqual("40");
  });

  it("renders correctly when passed a list of courses", () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);

    // Test if all the courses are rendered correctly in the body
    expect(wrapper.find("tbody").children()).toHaveLength(3);

    expect(wrapper.find("tbody").childAt(0).dive().html())
      .toEqual('<tr style="background-color:#f5f5f5ab"><td>ES6</td><td>60</td></tr>');
    expect(wrapper.find("tbody").childAt(1).dive().html())
      .toEqual('<tr style="background-color:#f5f5f5ab"><td>Webpack</td><td>20</td></tr>');
    expect(wrapper.find("tbody").childAt(2).dive().html())
      .toEqual('<tr style="background-color:#f5f5f5ab"><td>React</td><td>40</td></tr>');
  });
});
