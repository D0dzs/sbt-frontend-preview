'use client';

import { useCallback, useContext, useEffect, useState } from 'react';
import { MobileContext } from '../Providers/Screen-provider';
import ResetPasswordForm from '../(Forms)/ResetPasswordForm';
import ChangeRoleForm from '../(Forms)/ChangeRoleForm';
import RegisterNewUserForm from '../(Forms)/RegisterNewUserForm';
import ChangeUserStateForm from '../(Forms)/ChangeUserStateForm';

const UserTable = () => {
  const isMobile = useContext(MobileContext);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);

  const handlePasswordOpenChange = (isOpen, user = null) => {
    if (isOpen) {
      setSelectedUser(user);
    } else {
      setSelectedUser(null);
    }
  };

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(`${process.env.API_URL}/users/all`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      const { users } = await response.json();
      setUsers(users);
    } catch (error) {
      throw error;
    }
  }, [setUsers]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return isMobile ? (
    <div className="dark:outline-bme-lsecondary/10 outline-bme-dsecondary/10 mx-auto h-fit w-full max-w-[70vw] overflow-clip rounded-3xl shadow-xl outline-2 *:p-4">
      <div className="bg-bme-blue dark:bg-bme-orange text-bme-white dark:text-bme-black grid p-3">
        <p className="text-center text-xl">Név</p>
      </div>
      {[...users, 'newUserField'].map((user, i) => {
        if (user === 'newUserField') {
          return <RegisterNewUserForm key={i} currentIndex={i} fetchUsers={fetchUsers} />;
        } else {
          return !user.state ? (
            <div
              key={i}
              className={`grid items-center ${i % 2 === 0 ? 'bg-bme-lsecondary dark:bg-bme-dsecondary' : 'bg-bme-lprimary dark:bg-bme-dprimary'}`}
            >
              <p className="text-center">
                {user.lastName} {user.firstName}
              </p>
            </div>
          ) : (
            <div
              key={`${i}-${user.state}`}
              className={`striketrough grid items-center *:opacity-50 ${i % 2 === 0 ? 'bg-bme-lsecondary dark:bg-bme-dsecondary' : 'bg-bme-lprimary dark:bg-bme-dprimary'}`}
            >
              <p className="text-center">
                {user.lastName} {user.firstName}
              </p>
            </div>
          );
        }
      })}
    </div>
  ) : (
    <div className="dark:outline-bme-lsecondary/10 outline-bme-dsecondary/10 mx-auto w-[60vw] overflow-clip rounded-3xl shadow-xl outline-2 *:p-4 *:px-6">
      <div className="bg-bme-blue dark:bg-bme-orange text-bme-white dark:text-bme-black grid grid-cols-4 p-3">
        <p className="text-left text-xl">Név</p>
        <p className="text-center text-xl">Role</p>
        <p className="text-center text-xl">Jelszó</p>
        <p className="text-right text-xl">Aktív</p>
      </div>
      {[...users, 'newUserField'].map((user, i) => {
        if (user === 'newUserField') {
          return <RegisterNewUserForm key={i} currentIndex={i} fetchUsers={fetchUsers} />;
        } else {
          return !user.state ? (
            <div
              key={i}
              className={`grid grid-cols-4 place-items-center items-center ${i % 2 === 0 ? 'bg-bme-lsecondary dark:bg-bme-dsecondary' : 'bg-bme-lprimary dark:bg-bme-dprimary'}`}
            >
              <p className="mr-auto w-fit text-left">
                {user.lastName} {user.firstName}
              </p>
              <ChangeRoleForm className="cursor-pointer" user={user} fetchUsers={fetchUsers} />
              <ResetPasswordForm
                key={i}
                user={user}
                isOpen={selectedUser === user}
                onOpenChange={(open) => handlePasswordOpenChange(open, user)}
              />
              <ChangeUserStateForm key={`${i}-${user.state}`} user={user} fetchUsers={fetchUsers} />
            </div>
          ) : (
            <div
              key={`${i}-${user.state}`}
              className={`striketrough grid cursor-not-allowed grid-cols-4 items-center *:opacity-50 ${i % 2 === 0 ? 'bg-bme-lsecondary dark:bg-bme-dsecondary' : 'bg-bme-lprimary dark:bg-bme-dprimary'}`}
            >
              <p className="text-left">
                {user.lastName} {user.firstName}
              </p>
              <p className="text-center capitalize">{user.role}</p>
              <p className="mx-auto w-fit text-center">Módosítás</p>
              <ChangeUserStateForm key={`${i}-${user.state}`} user={user} fetchUsers={fetchUsers} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default UserTable;
