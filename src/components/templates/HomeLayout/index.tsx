import Navbar from 'components/organisms/Navbar';
import ToDoList from 'components/organisms/ToDoList';
import AuthContext from 'contexts/AuthContext';
import React, { useContext } from 'react';

export default function HomeLayout() {
  const user = useContext(AuthContext);
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
