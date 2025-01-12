// components/common/UserCard.tsx

import React from 'react';
import { UserProps } from '../../interfaces';

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 m-2 shadow-md">
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-gray-700">Email: {user.email}</p>
      <p className="text-gray-700">
        Address: {user.address.street}, {user.address.city}, {user.address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
