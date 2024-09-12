import React from 'react';
import closeIcon from './close-icon.png'; // Ensure you have the correct path to the image
import { getLatestNotification } from './utils';
import './Notifications.css'; // Ensure this file exists and is correctly linked

function Notifications() {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button 
        style={{ float: 'right', border: 'none', background: 'none', cursor: 'pointer' }} 
        aria-label="Close" 
        onClick={handleClick}
      >
        <img src={closeIcon} alt="Close" />
      </button>
      <p>Here is the list of notifications:</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

export default Notifications;
