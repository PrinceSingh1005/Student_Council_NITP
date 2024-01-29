// BackButton.js
import React from 'react';

const BackButton = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <button onClick={handleGoBack}>
      Go Back
    </button>
  );
};

export default BackButton;
