// BackButton.js
import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
  const history = useHistory();

  const handleGoBack = () => {
  window.location.href= '';
  };

  return (
    <button onClick={handleGoBack}>
      Go Back
    </button>
  );
};

export default BackButton;
