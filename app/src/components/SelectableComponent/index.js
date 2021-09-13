// Package dependencies
import React from 'react';

// Theme
import './style.scss';

export default (props) => (
  <div className="selectable-component-container" {...props}>
    {props.children}
  </div>
);
