import React from "react";
import BodySection from "./BodySection";
import { shallow } from "enzyme";

describe("BodySection tests", () => {
  it("should render correctly", () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    // Test if the component itself renders correctly
    expect(wrapper.exists()).toBe(true);

    // Test if the h2 element with the correct title is rendered
    const h2 = wrapper.find("h2");
    expect(h2.exists()).toBe(true);
    expect(h2.text()).toEqual("test title");

    // Test if the children nodes are rendered correctly
    const p = wrapper.find("p");
    expect(p.exists()).toBe(true);
    expect(p.text()).toEqual("test children node");
  });
});
