import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';

// functional component for Notifications
class Notifications extends React.Component {
  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer
    } = this.props;

    return (
      <>
        <div className="menuItem" onClick={handleDisplayDrawer}>
          <p>Your notifications</p>
        </div>

        {displayDrawer && (
          <div className="Notifications">
            <button
              style={{
                display: 'inline-block',
                position: 'absolute',
                right: '10px',
                top: '10px',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
              }}
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              <img
                src="close-icon.png"
                alt="close"
                style={{ width: '10px', height: '10px' }}
              />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.length === 0 && <li>No new notification for now</li>}
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

// Prop types validation for Notifications component
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

// Default props for Notifications component
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;
