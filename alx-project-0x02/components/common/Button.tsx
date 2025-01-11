// components/common/Button.tsx
import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ size, shape, children }) => {
  // Define Tailwind CSS classes based on the size and shape props
  let sizeClasses = '';
  switch (size) {
    case 'small':
      sizeClasses = 'px-4 py-2 text-sm';
      break;
    case 'medium':
      sizeClasses = 'px-6 py-3 text-base';
      break;
    case 'large':
      sizeClasses = 'px-8 py-4 text-lg';
      break;
  }

  let shapeClasses = '';
  switch (shape) {
    case 'rounded-sm':
      shapeClasses = 'rounded-sm';
      break;
    case 'rounded-md':
      shapeClasses = 'rounded-md';
      break;
    case 'rounded-full':
      shapeClasses = 'rounded-full';
      break;
  }

  return (
    <button
      className={`bg-blue-500 text-white ${sizeClasses} ${shapeClasses} hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500`}
    >
      {children}
    </button>
  );
};

export default Button;
