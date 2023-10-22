import React from 'react';

// Define the variable for the link
const warpRouteLink = 'http://127.0.0.1:3000'; // Replace with your actual link

function DeployWebApp() {
  return (
    <div>
      <h1>Your Warp Route web page will be up and running soon at</h1>
      <a href={warpRouteLink} target="_blank" rel="noopener noreferrer">
        {warpRouteLink}
      </a>
    </div>
  );
}

export default DeployWebApp;
