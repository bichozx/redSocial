import React from 'react';

export const AlertBox = () => {
  return (
    <div>
      <div className="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
        <span
          onclick="this.parentElement.style.display='none'"
          className="w3-button w3-theme-l3 w3-display-topright"
        >
          <i className="fa fa-remove"></i>
        </span>
        <p>
          <strong>Hey!</strong>
        </p>
        <p>People are looking at your profile. Find out who.</p>
      </div>
    </div>
  );
};
