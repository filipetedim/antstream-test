// Package dependencies
import React from 'react';

// Theme
import './style.scss';

export default (props) => {
  return (
    <div
      className="game-container"
      style={{
        backgroundImage: `url("${props.data.image}")`,
        minHeight: `${props.data.sizeHeight * 6}em`,
        minWidth: `${props.data.sizeWidth * 6}em`,
        maxHeight: `${props.data.sizeHeight * 6}em`,
        maxWidth: `${props.data.sizeWidth * 6}em`,
      }}
    ></div>
  );
};
