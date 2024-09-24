import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoadingSpinner.css';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-spinner-container">
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading</span>
      </div>
      <div className="loading-text">Loading</div>
    </div>
  );
};

export default LoadingSpinner;
