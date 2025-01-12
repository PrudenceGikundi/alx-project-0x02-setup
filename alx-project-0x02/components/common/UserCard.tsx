// components/common/UserCard.tsx
import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="p-4 border rounded-md shadow-md bg-white">
      <h2 className="font-semibold text-xl">{name}</h2>
      <p className="text-gray-500">{email}</p>
      <div className="mt-2 text-sm text-gray-600">
        <p>{address.street}</p>
        <p>{address.city}, {address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserCard;
