// Package dependencies
import React from 'react';

// Containers
import Recommended from './containers/recommended';

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="twelve columns">
          <Recommended />
        </div>
      </div>
    </div>
  );
}
