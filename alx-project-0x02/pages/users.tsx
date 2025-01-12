// pages/users.tsx

import React from 'react';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="flex flex-wrap">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

// This function runs at build time to fetch the user data
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: UserProps[] = await response.json();

  // Return the data as props to the UsersPage component
  return {
    props: {
      users: data,
    },
  };
}

export default UsersPage;
