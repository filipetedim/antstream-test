// Package dependencies
import React from 'react';

// Theme
import './style.scss';

export default (props) => {
  return <div className="achievement-container">{props.data.name}</div>;
};
