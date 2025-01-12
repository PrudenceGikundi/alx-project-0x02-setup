// pages/users.tsx
import React from 'react';
import { GetStaticProps } from 'next';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';
import Header from '@/components/layout/Header';

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Header />
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </div>
  );
};

// getStaticProps to fetch data at build time
export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    const users: UserProps[] = data.map((user: any) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      address: {
        street: user.address.street,
        city: user.address.city,
        zipcode: user.address.zipcode,
      },
    }));

    return {
      props: {
        users,
      },
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      props: {
        users: [], // In case of error, return an empty array
      },
    };
  }
};

export default UsersPage;
