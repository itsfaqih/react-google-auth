import Navbar from 'components/organisms/Navbar';
import ToDoList from 'components/organisms/ToDoList';
import UserContext from 'contexts/UserContext';
import React, { useContext } from 'react';
import { ProfileObj } from 'types/user';

export default function HomeLayout() {
  const user = useContext(UserContext) as ProfileObj;
  const initialItems: string[] = [];
  
  return (
    <>
      <Navbar />
      <div className="mt-8">
        {/* <ToDoList initialItems={initialItems} /> */}
        <div className="p-4 bg-white rounded-md shadow">
          Welcome, {user?.name}!
        </div>
      </div>
    </>
  );
}
