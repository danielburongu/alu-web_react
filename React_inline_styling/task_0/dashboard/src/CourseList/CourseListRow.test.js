import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
    it('renders a <CourseListRow /> component', () => {
        const wrapper = shallow(<CourseListRow textFirstCell="Holberton" />);
        expect(wrapper).toHaveLength(1);
    });

    it('renders a <CourseListRow /> component with isHeader set to true and textSecondCell === null', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Holberton" />);
        expect(wrapper.find('th')).toHaveLength(1);
        expect(wrapper.find('th').at(0).props().colSpan).toEqual(2);
    });

    it('renders two th elements when textSecondCell is present and isHeader is true', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Holberton" textSecondCell="Second" />);
        expect(wrapper.find('th')).toHaveLength(2);
    });

    it('renders no th elements and two td elements when isHeader is false', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Holberton" textSecondCell="Second" />);
        expect(wrapper.find('th')).toHaveLength(0);  // Ensure no <th> when isHeader is false
        expect(wrapper.find('td')).toHaveLength(2);  // Expect two <td> elements
    });
});
