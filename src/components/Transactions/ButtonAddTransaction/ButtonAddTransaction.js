import React from 'react';
import "./ButtonAddTransaction.scss";

export default function ButtonAddTransaction({onOpen}) {

  return (
    <button type="button" className="ButtonAddTransaction" onClick={onOpen}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0V20" stroke="white" strokeWidth="2" />
        <path d="M0 10L20 10" stroke="white" strokeWidth="2" />
      </svg>
    </button>
    );
};

