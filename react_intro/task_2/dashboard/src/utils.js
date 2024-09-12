// utils.js

export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}

// Function to return the current year
export function getFullYear() {
    return new Date().getFullYear();
  }
  
  // Function to return footer copy based on isIndex argument
  export function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}
