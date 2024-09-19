import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("BodySectionWithMarginBottom tests", () => {
  it("should render BodySection component with margin bottom", () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="test title" />);

    // Test if BodySectionWithMarginBottom renders BodySection component
    expect(wrapper.find(BodySection)).toHaveLength(1);

    // Dive into BodySection to test the content inside
    const bodySectionWrapper = wrapper.find(BodySection).dive();
    expect(bodySectionWrapper.find('h2').text()).toEqual('test title');
  });

  it("should apply correct class for margin bottom", () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="test title" />);

    // Check if the correct Aphrodite class is applied
    expect(wrapper.find('.bodySectionWithMargin')).toHaveLength(1);
  });
});
