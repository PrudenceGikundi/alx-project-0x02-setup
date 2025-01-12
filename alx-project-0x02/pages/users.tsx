// pages/users.tsx
import React from 'react';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <UserCard
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

// Fetch data from an API at build time
export const getStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    const users = data.map((user: any) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      address: `${user.address.street}, ${user.address.city}`,
    }));

    return {
      props: {
        users,
      },
    };
  } catch (error) {
    console.error('Failed to fetch users:', error);

    return {
      props: {
        users: [], // Pass an empty array in case of error
      },
    };
  }
};

export default UsersPage;


// import React, { useEffect, useState } from 'react';
// import UserCard from '../components/common/UserCard';
// import { UserProps } from '@/interfaces';

// const UsersPage: React.FC = () => {
//   const [users, setUsers] = useState<UserProps[]>([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         console.error('Failed to fetch users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold text-gray-900 mb-6">Users</h1>
//       <div className="space-y-4">
//         {users.map((user) => (
//           <UserCard
//             key={user.id}
//             id={user.id}
//             name={user.name}
//             email={user.email}
//             address={user.address}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UsersPage;
// pages/users.tsx
