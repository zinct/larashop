import React from 'react';

const Button = ({ children, type = 'primary', onClick, data = null, className = '' }) => {
  return (
    <button className={`btn btn-sm btn-${type} ${className}`} onClick={() => onClick(data)}>{children}</button>
  );
};

export default Button;