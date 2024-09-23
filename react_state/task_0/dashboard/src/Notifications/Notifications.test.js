import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

const htmlObj = getLatestNotification();

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: htmlObj },
];

describe('<Notifications />', () => {
  it('renders an <Notifications /> component', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper).toHaveLength(1);
  });

  it('does display the menuItem when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('does not display div.Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });

  it('does display the menuItem when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('does display div.Notifications when displayDrawer is true', () => {  
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });

  it('renders an <Notifications /> component checking for 3 NotificationItems', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find('.Notifications ul Memo(NotificationItem)')).toHaveLength(3);
  });

  it('verifies that the first NotificationItem element renders the html', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.html()).toContain('<li data-notification-type="default">New course available</li>');
  });

  it('verifies that Notifications renders correctly if you pass an empty array or without the listNotifications prop', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
    const wrapperTwo = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapperTwo.find('.Notifications')).toHaveLength(1);
  });

  it('verifies that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('verifies that Notifications renders correctly if you pass an empty array or without the listNotifications prop', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications p').text()).not.toEqual('Here is the list of notifications');
    expect(wrapper.find('.Notifications p').text()).toEqual('No new notification for now');
  });

  it('Verifies that when calling the function markAsRead on an instance of the component, the spy is being called with the right message', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const spy = jest.spyOn(console, 'log');
    const instance = wrapper.instance();
    instance.markAsRead(1);
    expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');
  });

  // New Test: Verifies clicking on the menu item calls handleDisplayDrawer
  it('verifies that clicking on the menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawer} />);

    // Ensure menuItem exists when displayDrawer is false
    expect(wrapper.find('.menuItem')).toHaveLength(1);

    // Simulate click on the menu item
    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  // New Test: Verifies clicking on the button calls handleHideDrawer
  it('verifies that clicking on the close button calls handleHideDrawer', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />);

    // Simulate click on the close button
    wrapper.find('button').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
