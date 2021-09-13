// Package dependencies
import React from 'react';

// Theme
import './style.scss';

function Spinner() {
  return (
    <svg
      width="76"
      height="80"
      viewBox="0 0 76 80"
      fill="none"
      className="nav-image antstream-spinner"
    >
      <mask id="mask0" maskUnits="userSpaceOnUse" x="4" y="0" width="56" height="56">
        <path
          d="M4 21.8964L7.48574 25.5108L19.6499 13.8774L26.6146 24.2286C24.4662 26.6262 22.9011 29.6002 22.195 32.9719C20.0465 43.2263 26.6533 53.2741 36.9521 55.4131C47.2503 57.5521 57.3403 50.9732 59.4881 40.7187C61.6371 30.4637 55.0304 20.4165 44.7316 18.2775C44.1072 18.1476 43.4839 18.0503 42.8632 17.9832L40.3666 5.40185L57.2285 5.06348L57.126 0L34.2019 0.460426L37.7085 18.1313C35.1199 18.5615 32.6712 19.5198 30.5056 20.9138L20.4997 6.04234L4 21.8229V21.8964Z"
          fill="white"
        ></path>
      </mask>
      <g mask="url(#mask0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 55.8168H59.924V-0.0144501H4V55.8168Z"
          fill="url(#paint0_linear)"
        ></path>
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.6223 37.9958L44.6929 39.6798C43.592 40.3131 41.7905 41.3487 40.6895 41.982L37.7595 43.6666C36.658 44.2992 35.7578 43.7814 35.7578 42.5155V31.1746C35.7578 29.9088 36.658 29.3903 37.7595 30.0236L40.6895 31.7082C41.7905 32.3408 43.592 33.3765 44.6929 34.0097L47.6223 35.6943C48.7239 36.3269 48.7239 37.3626 47.6223 37.9958Z"
        fill="#D5E1EA"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="4"
          y1="-0.0144501"
          x2="210.88"
          y2="55.9899"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1E88E5"></stop>
          <stop offset="1" stopColor="#14CCF8"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Spinner;
