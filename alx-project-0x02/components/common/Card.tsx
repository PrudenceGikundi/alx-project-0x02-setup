import React from 'react';
import { type CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 m-2 shadow-md">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
