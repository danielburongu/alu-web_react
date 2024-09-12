import React from 'react';
import './App.css';
import logo from './holbert.jpg';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';
import closeIcon from './close-icon.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>
      
      {/* Notifications Section */}
      <div className="Notifications">
        <p>Here is the list of notifications</p>
        <button
          aria-label="Close"
          style={{ float: 'right', border: 'none', background: 'none', cursor: 'pointer' }}
          onClick={() => console.log('Close button has been clicked')}
        >
          <img src={closeIcon} alt="close" width="10px" />
        </button>
        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
        </ul>
      </div>

      <main className="App-body">
        {/* Login Section */}
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <button type="button">OK</button>
        </form>
      </main>
      
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(false)}</p>
      </footer>
    </div>
  );
}

export default App;
